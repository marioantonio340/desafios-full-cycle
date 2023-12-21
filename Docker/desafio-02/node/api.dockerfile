FROM node:12

WORKDIR /app/src/api 
COPY . .
EXPOSE  3333

CMD npm install \
    && npm run migrate \
    && npm run seed \
    && npm run start \