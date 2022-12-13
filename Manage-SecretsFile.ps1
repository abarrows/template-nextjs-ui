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

if ($Encrypt) {
    if ($File -match "\.gpg") {
        $File.Replace(".gpg","")
    }
    Write-Output "Encrypting the ${FILE} file for this project.   Only use the secret that is in 1Password under .env files encryption secret!"
    gpg -c $File
}
elseif ($Decrypt) {
    if (!(Test-Path -Path $File -PathType Leaf)) {
        $File = $File+".gpg"
    }
    Write-Output "Decrypting the ${FILE} file for this project.   Only use the secret that is in 1Password under .env files encryption secret!"
    gpg --output $File --decrypt $File
}
