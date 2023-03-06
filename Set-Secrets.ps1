param (
    [parameter(Mandatory = $false)]
    $KeyVaultRG = "AMU_KeyVaults_RG",
    [parameter(Mandatory = $false)]
    $SecretsFile = "Secrets.json"
)

#Check to see if Az module is installed 
if (Get-Module -ListAvailable Az) {
    #It's installed, this would be if you are running locally. 
}
else {
    Write-Host "Installing Azure Powershell Module."
    Install-Module -Name Az -Confirm:$false -Force
}

Import-Module Az -ErrorAction SilentlyContinue

$keyVaults = (Get-Content -Path $SecretsFile | ConvertFrom-Json).PSObject.Properties

$keyVaults | ForEach-Object {
    $KeyVaultName = $_.Name
    New-AzKeyVault -Name $KeyVaultName -ResourceGroupName "$KeyVaultRG" -Sku Standard -EnableRbacAuthorization -Location 'Central US' -ErrorAction SilentlyContinue
    $secrets = $_.Value
    $secrets | ForEach-Object {
        $SecretName = $_.SecretName.ToLower().Replace("_", "-")
        $SecretValue = $_.SecretValue
        $ContentType = $_.ContentType
        Set-AzKeyVaultSecret -VaultName $KeyVaultName -SecretName "$SecretName" -SecretValue ("$SecretValue" | ConvertTo-SecureString -AsPlainText) -ContentType "$ContentType"
    }
}