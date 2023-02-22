const express = require('express')
const app = express()

app
  .get('/', (req, res) => {
    res.send('Docker container test 5')
  })
  .listen(3000)
