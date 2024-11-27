const express = require("express")
const cors= require("cors")
const app = express()

//import the routes




//enable cors middleware
app.use(cors())
app.use(express.static(__dirname + '/client/dist'));
app.use(express.json())
app.use(express.urlencoded({extended: true}))



const port = 5432

app.listen(port, ()=>{
    console.log("listening on port "+port);
    
    
})