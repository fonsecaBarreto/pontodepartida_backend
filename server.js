const express = require('express')
const cors = require("cors")


const app = express()
app.use(cors())
const PORT = process.env.NODE_ENV || 9000


app.get("/test", (req, res)=>{
    return res.json("okok")
})
app.listen(PORT, ()=>{
    console.log("Running on ", PORT)
})