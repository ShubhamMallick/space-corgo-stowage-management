# Start from Ubuntu 22.04 base image
FROM ubuntu:22.04

# Avoid interactive prompts
ENV DEBIAN_FRONTEND=noninteractive
ENV NODE_OPTIONS=--openssl-legacy-provider

# Install Node.js (LTS) and dependencies
RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy React dependency files
COPY package*.json ./
RUN npm install

# Copy frontend source code
COPY public ./public
COPY src ./src

# Build React app
RUN npm run build

# Install serve to serve static site
RUN npm install -g serve

# Expose port 8000 (per hackathon requirement)
EXPOSE 8000

# Serve app at port 8000
CMD ["serve", "-s", "build", "-l", "8000"]
