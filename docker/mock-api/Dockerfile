# Mock API Dockerfile
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy server code
COPY server.js ./

# Expose port
EXPOSE 8080

# Set environment
ENV NODE_ENV=development
ENV PORT=8080

# Start server
CMD ["npm", "start"]
