param (
    [string]$TenantName = "Andrews McMeel Universal",
    [string]$SubscriptionName = "AMU Pay-as-you-go",
    [string]$KeyVaultRG = "AMU_KeyVaults_RG",
    [string]$File = "Secrets.json",
    [string]$KeyVaultName = ".*",
    [string]$SecretName = ".*"
)

# Check to see if Azure PowerShell Module is installed
if (!(Get-Module -ListAvailable Az.KeyVault)) {
    Write-Host "Installing Azure Powershell Module..."
    Install-Module -Name Az.KeyVault -Confirm:$false
}

# Check if user needs to log in
if (!(Get-AzContext)) {
    Write-Host "Cannot retrieve AzContext. Running 'Connect-AzAccount'" -ForegroundColor DarkGray
    [void](Connect-AzAccount -Subscription $SubscriptionName -Force)
}

# Check if tenant is available
$Tenant = Get-AzTenant -ErrorAction SilentlyContinue | Where-Object Name -match "$TenantName"
if (!$Tenant) {
    Write-Error "Cannot retrieve '$TenantName' tenant. Please try logging in with 'Connect-AzAccount'"
    return
}

# Switch to the correct subscription and tenant
[void](Set-AzContext -SubscriptionName $SubscriptionName -Tenant $Tenant.Id)
Write-Host "AzContext set to 'TenantName=$TenantName' and 'SubscriptionName=$SubscriptionName'" -ForegroundColor DarkGray

# Get repository name from git origin url
$RepositoryName = ((git remote get-url origin).Split("/")[-1].Replace(".git", ""))

# Filter by $KeyVaultName argument
$KeyVaults = (Get-Content -Path $File | ConvertFrom-Json).PSObject.Properties | Where-Object Name -imatch $KeyVaultName

# Loop through setting secrets for each key vault
$KeyVaults | ForEach-Object {
    $KeyVaultName = $_.Name
    # Get Environment from key vault name
    $Environment = $KeyVaultName.Split('-')[-1]
    $KeyVault = Get-AzKeyVault -VaultName $KeyVaultName
    if ($KeyVault) {
        # Only set tags if they aren't set correctly
        if ((! $KeyVault.Tags.environment -eq "$Environment") -or (! $KeyVault.Tags."repository-name" -eq "$RepositoryName")) {
            $KeyVault = $KeyVault | Update-AzKeyVault -Tags @{"environment" = "$Environment"; "repository-name" = "$RepositoryName" }
            Write-Host "[$KeyVaultName] Property updated: key vault tags" -ForegroundColor Green
        }
        else {
            Write-Host "[$KeyVaultName] Property not updated: key vault tags" -ForegroundColor DarkGray
        }
    }
    else {
        # Create key vault with proper tags
        $KeyVault = New-AzKeyVault -Name $KeyVaultName -ResourceGroupName "$KeyVaultRG" -Sku Standard -EnableRbacAuthorization -Location 'Central US' -Tag @{"environment" = "$Environment"; "repository-name" = "$RepositoryName" } -ErrorAction SilentlyContinue
        Write-Host "[$KeyVaultName] Created Azure Key Vault with correct tags" -ForegroundColor Green
    }

    # Filter by $SecretName argument
    $Secrets = $_.Value | Where-Object SecretName -imatch $SecretName

    $Secrets | ForEach-Object {
        # Set variables for secret object
        $SecretNameLower = $_.SecretName.ToLower().Replace("_", "-")
        $SecretValue = $_.SecretValue
        $ContentType = $_.ContentType

        # Get current ContentType and Value to compare
        $CurrentContentType = (Get-AzKeyVaultSecret -VaultName $KeyVaultName -SecretName "$SecretNameLower").ContentType   
        $CurrentValue = (Get-AzKeyVaultSecret -VaultName $KeyVaultName -SecretName "$SecretNameLower" -AsPlainText)

        # If value or ContentType is different, update the secret
        if (($CurrentValue -ne $SecretValue) -or ($CurrentContentType -ne $ContentType)) {
            $Secret = Set-AzKeyVaultSecret -VaultName $KeyVaultName -SecretName "$SecretNameLower" -SecretValue ("$SecretValue" | ConvertTo-SecureString -AsPlainText -Force) -ContentType "$ContentType"
            Write-Host "[$KeyVaultName] Secret updated: $($_.SecretName)" -ForegroundColor Green
        }
        else {
            Write-Host "[$KeyVaultName] Secret not updated: $($_.SecretName)" -ForegroundColor DarkGray
        }
    }
}