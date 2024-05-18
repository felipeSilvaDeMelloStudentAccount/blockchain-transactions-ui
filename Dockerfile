# Use an official Node.js image as the base image
FROM node:16-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

COPY .env .env

COPY . .

# Build the application
RUN npm run build

# Use an official Nginx image to serve the built application
FROM nginx:alpine

# Copy the built application from the build stage to the Nginx HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom Nginx configuration file to the conf.d directory
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
