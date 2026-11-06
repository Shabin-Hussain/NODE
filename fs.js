//import file system module

const fs = require('fs')

const getFile = ()=>{
    fs.writeFile('./text.txt','my fist programme',(err)=>{
        if(err) throw err

        console.log('data written to the file');
        
    })
}

getFile()