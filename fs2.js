const fs = require('fs')

const rFile = () =>{
    fs.readFile('./text.txt','utf-8',(err,data)=>{
        if(err) throw err


        console.log(data);
        
    })
}

rFile()