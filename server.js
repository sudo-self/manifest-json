const express = require('express');
const bodyParser = require('body-parser');
const { Redis } = require('@upstash/redis');
require('dotenv').config(); 

const app = express();
const port = 3000;

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});


app.use(bodyParser.json());


app.post('/set', async (req, res) => {
  const { key, value } = req.body;
  await redis.set(key, value);
  res.json({ message: 'Value set successfully!' });
});


app.get('/get', async (req, res) => {
  const { key } = req.query;
  const value = await redis.get(key);
  if (value) {
    res.json({ value });
  } else {
    res.json({ value: null });
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
