FROM node:18.7.0-alpine3.15

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000
