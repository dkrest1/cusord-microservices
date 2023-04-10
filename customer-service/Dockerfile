# Use the official Node.js image as the base image
FROM node:16.15.1-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json into the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install 

# Install nest globally
RUN npm install --global @nestjs/cli

# Copy the application source code into the working directory
COPY . .

# Expose the application port (default is 3000 for NestJS)
EXPOSE ${APP_PORT}

# Start the application in development mode
CMD ["npm", "run", "start:dev"]