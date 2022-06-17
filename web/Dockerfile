FROM node:18-alpine3.14

WORKDIR /app

COPY ./package.json ./

ENV VITE_API_URL=http://localhost:3000/api

RUN ["npm", "install"]

COPY . .

EXPOSE 4000

CMD [ "npm", "run", "dev" ]