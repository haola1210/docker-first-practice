import dotenv from 'dotenv';
import express from "express";
import cors from 'cors';

if(process.env.NODE_ENV !== "production"){
  dotenv.config();
}

const port = process.env.PORT;

const app = express();


if(process.env.NODE_ENV !== "production"){
  const corsOptions = {
    origin: process.env.WEB_URL,

  };
  app.use(cors(corsOptions));
}


app.get('/', (_, res) => {
  res.send('Hello World!!!! hehe hoho')
})

app.post('/api/rand', (_, res) => {
  res.json({
    name: 'rand',
    value: Math.random()
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})