const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');

app.use(cors());
app.use(async (req,res,next)=> {
  await axios.get('https://koreanjson.com/users')
  await res.send()
  await next();
})
app.use((req,res)=> {
  res.status(404).send('404 not found');
})
app.use((req, res) => {
  res.status(500).send('Bad request');
})
app.get('/', (req, res) => {

  res.status(200).send(JSON.stringify(data.users))
})

app.post('/users', (req, res) => {
  res.status(201).send();
})
app.listen(3000,() => {
  `port 3000 server on`
})