FROM node:18-alpine3.14

WORKDIR /app

COPY ./package.json .

ENV PORT=3000
ENV WEB_URL=http://localhost:4000

RUN ["npm", "install"]

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]



