import express from 'express'
import path from 'path'
const app = express()
// const path = require('path')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(express.static(path.join(__dirname,'/public')))
app.use(express.static(path.join(process.cwd(), 'public')))
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})