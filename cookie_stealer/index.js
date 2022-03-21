const express = require('express')
const cors = require('cors');
const app = express()

const allowedOrigins = ['http://localhost:3000'];
const options = {
  origin: allowedOrigins,
  credentials: true,
};

app.use(cors(options))


app.get('/:id', async (req, res) => {
  console.log(req.params.id)
});

app.listen(5000, () => {
    console.log(`Example app listening on port 5000`)
  })