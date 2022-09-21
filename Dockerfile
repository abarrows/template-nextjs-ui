# Install dependencies only when needed
FROM node:16.13.0-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# RUN apk add --no-cache libc6-compat
WORKDIR /
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:16.13.0-alpine AS builder
WORKDIR /
COPY --from=deps /node_modules ./node_modules
COPY . .

# TODO-ONBOARDING: update and set envs
# Dynamic BUILDTIME env variables that are set during deployment.
# Note - `NEXT_PUBLIC_` variables are needed during the build process.
# Add them with --build-arg in the Action Workflow .yml files,
# then document and comment them out in the .env.* files
ARG DEPLOY_ENV
ENV DEPLOY_ENV=$DEPLOY_ENV
ARG NEXT_PUBLIC_DEPLOY_ENV
ENV NEXT_PUBLIC_DEPLOY_ENV=$NEXT_PUBLIC_DEPLOY_ENV
# ARG SENTRY_AUTH_TOKEN
# ENV SENTRY_AUTH_TOKEN=$SENTRY_AUTH_TOKEN
ARG BASE_URL
ENV BASE_URL=$BASE_URL
ARG NEXT_PUBLIC_BASE_URL
ENV NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL
ARG NEXT_PUBLIC_B2C_TENANT_NAME
ENV NEXT_PUBLIC_B2C_TENANT_NAME=$NEXT_PUBLIC_B2C_TENANT_NAME
ARG SERVICE_APPNAME_URL
ENV SERVICE_APPNAME_URL=$SERVICE_APPNAME_URL
ARG API_SUBSCRIPTION_KEY
ENV API_SUBSCRIPTION_KEY=$API_SUBSCRIPTION_KEY
ARG NEXT_PUBLIC_VINDICIA_AUTH_ID
ENV NEXT_PUBLIC_VINDICIA_AUTH_ID=$NEXT_PUBLIC_VINDICIA_AUTH_ID
ARG VINDICIA_PRIVATE_KEY
ENV VINDICIA_PRIVATE_KEY=$VINDICIA_PRIVATE_KEY
ARG NEXT_PUBLIC_VINDICIA_SERVER
ENV NEXT_PUBLIC_VINDICIA_SERVER=$NEXT_PUBLIC_VINDICIA_SERVER
ARG NEXT_PUBLIC_VINDICIA_REST_SERVER
ENV NEXT_PUBLIC_VINDICIA_REST_SERVER=$NEXT_PUBLIC_VINDICIA_REST_SERVER

RUN yarn build
RUN yarn postbuild

# Production image, copy all the files and run next
FROM node:16.13.0-alpine AS runner

# TODO-ONBOARDING: update and set envs
# Dynamic RUNTIME env variables that are set during deployment.
# Add them with --build-arg in the Action Workflow .yml files,
# then document and comment them out in the .env.* files
ARG BASE_URL
ARG NEXTAUTH_URL
ENV NEXTAUTH_URL=$NEXTAUTH_URL
ARG B2C_CLIENT_ID
ENV B2C_CLIENT_ID=$B2C_CLIENT_ID
ARG B2C_CLIENT_SECRET
ENV B2C_CLIENT_SECRET=$B2C_CLIENT_SECRET
ARG NEXTAUTH_SECRET
ENV NEXTAUTH_SECRET=$NEXTAUTH_SECRET
ARG SERVICE_APPNAME_URL
ENV SERVICE_APPNAME_URL=$SERVICE_APPNAME_URL
ARG API_SUBSCRIPTION_KEY
ENV API_SUBSCRIPTION_KEY=$API_SUBSCRIPTION_KEY
ARG NEXT_PUBLIC_VINDICIA_AUTH_ID
ENV NEXT_PUBLIC_VINDICIA_AUTH_ID=$NEXT_PUBLIC_VINDICIA_AUTH_ID
ARG VINDICIA_PRIVATE_KEY
ENV VINDICIA_PRIVATE_KEY=$VINDICIA_PRIVATE_KEY
ARG NEXT_PUBLIC_VINDICIA_SERVER
ENV NEXT_PUBLIC_VINDICIA_SERVER=$NEXT_PUBLIC_VINDICIA_SERVER
ARG NEXT_PUBLIC_VINDICIA_REST_SERVER
ENV NEXT_PUBLIC_VINDICIA_REST_SERVER=$NEXT_PUBLIC_VINDICIA_REST_SERVER

WORKDIR /
COPY --from=builder .env.production ./.env.production
COPY --from=builder node_modules ./node_modules
COPY --from=builder .next ./.next
COPY --from=builder next.config.js ./next.config.js
COPY --from=builder public ./public
COPY --from=builder redirects.js ./redirects.js

EXPOSE 3000

HEALTHCHECK CMD curl --fail http://localhost:3000/api/health || exit

CMD ["node_modules/.bin/next", "start"]
