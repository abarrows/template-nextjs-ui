param (
    [parameter(Mandatory = $false)]
    [string]$File = "KeyVaults.json",
    [parameter(Mandatory = $false)]
    [switch]$Encrypt,
    [parameter(Mandatory = $false)]
    [switch]$Decrypt
)

if ((!$Decrypt) -and (!$Encrypt)){
    Write-Error "Please use either -Decrypt or -Encrypt when calling the script"
}

if ($File -match "\.gpg") {
    $File.Replace(".gpg","")
}

if ($Encrypt) {
    Write-Output "Encrypting the ${FILE} file for this project.   Only use the secret that is in 1Password under .env files encryption secret!"
    gpg -c $File
}
elseif ($Decrypt) {
    Write-Output "Decrypting the ${FILE} file for this project.   Only use the secret that is in 1Password under .env files encryption secret!"
    gpg --output $File --decrypt $File'.gpg'
}
