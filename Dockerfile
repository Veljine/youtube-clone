FROM node

WORKDIR /App

COPY package.json /App

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]