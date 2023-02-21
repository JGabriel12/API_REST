const express = require('express')
const app = express()

app
  .get('/', (req, res) => {
    res.send('Docker container test 4')
  })
  .listen(3000)
