import Express from 'express'
import pug from 'pug'
import path from 'path'
import bodyparser from 'body-parser'

const app = Express()

app.use(Express.static(__dirname + '/../dist'))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '../dist'))

app.use(bodyparser.json())

app.use('*', (req, res)=>{
  res.render('index')
})

app.listen('8080', ()=>{
  console.log('listening on port 8080')
})
