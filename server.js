import express from "express";
import router from "./routes/index.js"
const app=express();
app.use('/api',router)
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',express.static('public'))



const server= app.listen(8080,()=>{
    console.log(`server runnigg on port ${server.address().port}`)
})

server.on('error',error=>console.log(`Error running server:${error}`))