# Set image version
ARG NODE_VERSION=18

## Dependencies ##
FROM node:${NODE_VERSION}-alpine AS deps

# Set container directory
WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

## Builder ##
FROM node:${NODE_VERSION}-alpine AS builder

# Set container directory
WORKDIR /app

# Copy application files
COPY --from=deps /app/node_modules /app/node_modules
COPY . .

# Build the application
RUN yarn build

## Runner ##
FROM node:${NODE_VERSION}-alpine AS runner

# Set container directory
WORKDIR /app

# Create Next JS user/group
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Copy application files
COPY --from=builder --chown=nextjs:nodejs /app/.next /app/.next
COPY --from=builder --chown=nextjs:nodejs /app/public /app/public
COPY --from=builder --chown=nextjs:nodejs /app/node_modules /app/node_modules

# Expose the package.json so the version is accessible
# TODO: remove this after addressing the TODO about version # in api/info/route.js
COPY --from=deps --chown=nextjs:nodejs /app/package.json /app/package.json

# Next.js needs this to set the port
ENV PORT=3000

# Set container properties
USER nextjs
EXPOSE 3000
HEALTHCHECK CMD curl --fail http://localhost:3000/api/health || exit

# Start the server
CMD node_modules/.bin/next start
