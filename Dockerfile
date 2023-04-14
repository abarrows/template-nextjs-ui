ARG NODE_VERSION=16.13.0

FROM node:${NODE_VERSION}-alpine AS deps

# Set build environment
ARG NODE_ENV=${NODE_ENV}

# Sets the working directory
WORKDIR /base

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Build the UI app
FROM node:${NODE_VERSION}-alpine AS builder

# Set build environment
ARG NODE_ENV=${NODE_ENV}

# Sets the working directory
WORKDIR /build

COPY --from=deps base/node_modules ./node_modules
COPY . .

RUN yarn build
RUN yarn postbuild

# NextJS build will create generated JS and CSS in .next directory. 
# We will need this for our application to run.
# All public folder contents will be needed as well. This folder contains static assets.
FROM node:${NODE_VERSION}-alpine AS runner

# Set build environment
ARG NODE_ENV=${NODE_ENV}

# Sets the working directory
WORKDIR /app

# Create Next JS user/group
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Copy files from builder step
COPY --from=builder --chown=nextjs:nodejs /build/.env /build/next.config.js /build/package.json ./
COPY --from=builder --chown=nextjs:nodejs /build/redirects.js ./
COPY --from=builder --chown=nextjs:nodejs /build/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /build/next.config.js ./
COPY --from=builder --chown=nextjs:nodejs /build/public ./public
COPY --from=builder --chown=nextjs:nodejs /build/node_modules ./node_modules

# Next.js needs this to set the port
ENV PORT=3000

# Set container properties
USER nextjs
EXPOSE 3000
HEALTHCHECK CMD curl --fail http://localhost:3000/api/health || exit

# Start webserver
CMD node_modules/.bin/next start
