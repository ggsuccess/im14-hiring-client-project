const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use((req,res)=> {
  res.status(404).send('404 not found');
})
app.use((req, res) => {
  res.status(500).send('Bad request');
})
app.get('/', (req, res) => {

  res.status(200).send(JSON.stringify())
})

app.post('/users', (req, res) => {

})
app.listen(3000,() => {
  `port 3000 server on`
})