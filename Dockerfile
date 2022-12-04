FROM node:14.17.6-alpine3.13

LABEL maintainer="danisbagus"

RUN mkdir /app 

WORKDIR /app

COPY . .

RUN npm install

CMD ["sh", "-c", "npx sequelize-cli db:migrate & npm start"]
