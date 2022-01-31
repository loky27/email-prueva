import mat from './materia.mjs'
import mentor from './mentore.mjs'
import express, { application } from 'express'
const app = express()
const port = process.env.PORT || 3000
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.get('use',(req,res)=>{
  console.log(req)
  res.send("hola")
}
)
app.get('/mate', (req, res) => {
  res.send(JSON.stringify(mat()))
})
apt.get('/mentor',(req,res)=>{
  res.send(JSON.stringify(mentro()))
})

app.post('/users',(req,res)=>
{
    console.log(req.body)
    res.sendStatus(201)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

