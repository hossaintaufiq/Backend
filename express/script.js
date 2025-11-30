import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/profile',function (req, res) {
    res.send('profile page')
})

app.listen(3000)