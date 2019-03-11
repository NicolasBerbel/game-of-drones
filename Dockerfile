FROM node:latest

WORKDIR /app

COPY . /app

RUN npm i && npm run build

ENV PORT 80

EXPOSE $PORT

CMD ["npm", "start"]