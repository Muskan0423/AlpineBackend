# Node js image
FROM node:14

# working directory
WORKDIR /usr/src/index

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# application port
EXPOSE 3000

# Command to run the app
CMD ["node", "index.js"]
