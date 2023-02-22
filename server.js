const express = require('express')
const app = express()

app
  .get('/', (req, res) => {
    res.send('Docker container test 6')
  })
  .listen(3000)
