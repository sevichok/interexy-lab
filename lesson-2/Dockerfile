FROM node:16.14.0-alpine 

WORKDIR /usr/lesson-2/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]