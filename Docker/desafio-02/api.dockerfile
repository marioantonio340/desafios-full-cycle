FROM node:21-alpine3.18

WORKDIR /app

COPY . /app

RUN  npm init -y && npm install express sequelize mysql2

CMD ["node", "server.js"]

EXPOSE 3000