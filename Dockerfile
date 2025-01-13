# Use an official Node.js image as a base image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Expose the port that the application will run on
EXPOSE 3000

# Define the command to start the application in SSR mode
CMD ["npm", "run", "dev"]