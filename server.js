const express = require('express')
const app = express()

app
  .get('/', (req, res) => {
    res.send('My app test!')
  })
  .listen(3000)
