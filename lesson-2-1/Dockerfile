FROM node:16.14.0-alpine 

WORKDIR /usr/lesson-2-1

COPY package.json .

RUN npm install

COPY . .

# EXPOSE 3000

CMD node quickSort.js ; node combSort.js ; node cocktailSort.js ; node bubbleSort.js 