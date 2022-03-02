#!/bin/bash
echo Encrypting the .env file for this project.   Only use the secret that is in 1Password under .env files encryption secret!
gpg --output .env.gpg --symmetric .env

