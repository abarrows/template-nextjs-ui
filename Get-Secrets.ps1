param (
    [parameter(Mandatory = $true, ValueFromPipeline = $true)]
    $KeyVaultName,
    [parameter(Mandatory = $false, ValueFromPipeline = $true)]
    [string][ValidateSet(".env", ".env.development", ".env.staging", ".env.production")]$EnvFileName = '.env'
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

$Secrets = (Get-AzKeyVaultSecret -VaultName $KeyVaultName).Name

try {
    Clear-Content -Path $EnvFileName -ErrorAction SilentlyContinue
}
catch {
    #Do nothing, the file doesn't exist yet. 
}


$Secrets | ForEach-Object {
    $argName = $_.ToUpper() 
    $argName = $argName.Replace("-", "_")
    $argName = $argName.Replace("`"", "")
    $argSecret = (Get-AzKeyVaultSecret -VaultName $KeyVaultName -Name $_).secretvalue | ConvertFrom-SecureString -AsPlainText
    $buildArg = $argName + "=" + $argSecret 
    Add-Content -Path $EnvFileName -Value $buildArg
}

Write-Host "Environment file $EnvFileName generated.  Content is:" -ForegroundColor Green
Get-Content $EnvFileName 