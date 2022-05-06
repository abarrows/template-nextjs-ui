#!/bin/bash
echo Decrypting the Create-KeyVaults.ps1 file for this project.   Only use the secret that is in 1Password under .env files encryption secret!
gpg --output Create-KeyVaults.ps1 --decrypt Create-KeyVaults.ps1.gpg