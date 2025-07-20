const express = require('express');
const cors = require('cors');
// const fetch = require('node-fetch');

// "http://www.omdbapi.com/?apikey=ff35f87a&s=" 

const app = express();
app.use(cors());

app.get("/api",async(req , res)=>{

    var name = req.query.value;
    if(name==' '||name==''||name=='.')
    {
        console.log("something went wrong");
        name = 'batman';
    }
    
    const url = "http://www.omdbapi.com/?apikey=ff35f87a&s="+name;
    

    try{
        const response = await fetch(url);
        const data = await response.json();
        return res.json(data);
    } catch(error){
        console.log(error+"something went wrong backend");
    }

    
})

app.listen(4500,()=>{
    console.log("server running at port 4500");
})
