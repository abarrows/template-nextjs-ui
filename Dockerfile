# Set image version
ARG NODE_VERSION=18.11.0

## Dependencies ##
FROM node:${NODE_VERSION}-alpine AS deps

# Set container directory
WORKDIR /app

# Install dependencies
COPY package.json *-lock.* *.lock ./
RUN npm install --production

## Builder ##
FROM node:${NODE_VERSION}-alpine AS builder

# Set container directory
WORKDIR /app

# Copy application files
COPY --from=deps /app/.yarn ./.yarn
COPY . .

# Rebuild npm run binaries
RUN npm run rebuild && npm run build

## Runner ##
FROM node:${NODE_VERSION}-alpine AS runner

# Set container directory
WORKDIR /app

# Set NODE_ENV to production for performance reasons
ENV NODE_ENV=production

# Create Next JS user/group
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# Copy static files into the container
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --chown=nextjs:nodejs .env* next.config.js redirects.js yarn.lock package.json ./

# Copy application files
COPY --from=deps --chown=nextjs:nodejs /app/.yarn ./.yarn
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next

# Rebuild npm run binaries
RUN rm -rf /app/.npm run/unplugged && npm run rebuild

# Set Next.js properties
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT=3000

# Set container properties
USER nextjs
EXPOSE 3000
HEALTHCHECK CMD curl --fail http://localhost:3000/api/health || exit

# Start the server
CMD npm start
