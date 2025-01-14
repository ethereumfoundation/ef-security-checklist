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

EXPOSE 4173

CMD ["npm", "run", "preview"]