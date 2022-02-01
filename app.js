import mat from './materia.mjs'
import ment from "./mentore.mjs"
import express, { application } from 'express'
const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/',(req,res)=>{
  
  res.send("hola")
}
)

apt.get('/mentor',(req,res)=>{
  res.send(JSON.stringify(ment()))
})

app.post('/users',(req,res)=>
{
    console.log(req.body)
    res.sendStatus(201)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

