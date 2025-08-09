<<<<<<< HEAD
FROM node:20-alpine
=======
FROM node:18-alpine
>>>>>>> ae4900d (Started with frontend)
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "app.js"]
