import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/profile',function (req, res) {
    res.send('profile page')
})

app.get('/settings',(req,res)=>{
    res.send('settings page')
})

app.listen(3000)