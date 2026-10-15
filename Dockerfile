# Stage 1: Environment Setup
FROM node:20-alpine
WORKDIR /app

# Stage 2: Install Dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Stage 3: Copy Code & Build Static Files
COPY . .
RUN npm run build

# Stage 4: Expose internal port and start server
EXPOSE 5173

# Boot the app using the new start script (binds to 0.0.0.0)
CMD ["npm", "run", "start"]