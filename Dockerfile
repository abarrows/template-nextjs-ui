# Set image version
ARG NODE_VERSION=18.11.0

## Dependencies ##
FROM node:${NODE_VERSION}-alpine AS deps

# Set container directory
WORKDIR /app

# Install dependencies
COPY package.json *-lock.* *.lock .yarnrc.yml ./
COPY .yarn ./.yarn
RUN yarn install --frozen-lockfile

## Builder ##
FROM node:${NODE_VERSION}-alpine AS builder

# Set container directory
WORKDIR /app

# Copy application files
COPY --from=deps /app/.yarn ./.yarn
COPY . .

# Rebuild yarn binaries
RUN yarn rebuild

# Build the application
RUN yarn build

## Runner ##
FROM node:${NODE_VERSION}-alpine AS runner

# Set container directory
WORKDIR /app

# Set NODE_ENV to production for performance reasons
ENV NODE_ENV=production

# Create Next JS user/group
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Copy static files into the container
COPY --chown=nextjs:nodejs public ./public
COPY --chown=nextjs:nodejs .env* next.config.js redirects.js .yarnrc.yml package.json ./

# Copy application files
COPY --from=deps --chown=nextjs:nodejs /app/.yarn ./.yarn
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next

# Rebuild yarn binaries
RUN rm -rf /app/.yarn/unplugged && yarn rebuild

# Set Next.js properties
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT=3000

# Set container properties
USER nextjs
EXPOSE 3000
HEALTHCHECK CMD curl --fail http://localhost:3000/api/health || exit

# Start the server
CMD yarn start
