ARG NODE_VERSION=18

# Set the base image
FROM node:${NODE_VERSION}-alpine AS deps

# Sets the app directory
WORKDIR /base

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:${NODE_VERSION}-alpine AS builder

# Sets the app directory
WORKDIR /build

# Copy the application into the container
COPY --from=deps base/node_modules ./node_modules
COPY . .

# Build the application
RUN yarn build

# NextJS build will create generated JS and CSS in .next directory.
# We will need this for our application to run.
# All public folder contents will be needed as well. This folder contains static assets.
FROM node:${NODE_VERSION}-alpine AS runner

# Sets the app directory
WORKDIR /app

# Create Next JS user/group
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Copy files from builder step
COPY --from=builder --chown=nextjs:nodejs /build/.env /build/next.config.js /build/package.json ./
COPY --from=builder --chown=nextjs:nodejs /build/redirects.js ./
COPY --from=builder --chown=nextjs:nodejs /build/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /build/public ./public
COPY --from=builder --chown=nextjs:nodejs /build/node_modules ./node_modules

# Next.js needs this to set the port
ENV PORT=3000

# Set container properties
USER nextjs
EXPOSE 3000
HEALTHCHECK CMD curl --fail http://localhost:3000/api/health || exit

# Start the server
CMD node_modules/.bin/next start
