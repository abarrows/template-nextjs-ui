#!/bin/bash
echo Encrypting the Create-KeyVaults.ps1 file for this project.   Only use the secret that is in 1Password under .env files encryption secret!
gpg -c Create-KeyVaults.ps1
