# Set image version
ARG NODE_VERSION=18

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
COPY --from=deps /app/node_modules ./node_modules
COPY data ./data
COPY client ./client
COPY public ./public
COPY src ./src
COPY *.js *.json .env .browserslistrc .nvmrc .npmrc *-lock.* *.lock ./

# Rebuild npm run binaries
RUN npm run rebuild && npm run build

## Runner ##
FROM node:${NODE_VERSION}-alpine AS runner

# Set container directory
WORKDIR /app

# Create Next JS user/group
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Copy static files into the container
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --chown=nextjs:nodejs .env* next.config.js redirects.js package-lock.json package.json ./

# Copy application files
COPY --from=deps --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next

# Rebuild npm run binaries
RUN npm cache clean --force && RUN npm rebuild

# Set Next.js properties
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT=3000

# Set container properties
USER nextjs
EXPOSE 3000
HEALTHCHECK CMD curl --fail http://localhost:3000/api/health || exit

# Start the server
CMD npm start
