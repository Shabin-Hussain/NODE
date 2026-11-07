//import fs

const fs = require('fs')

const renameFile = () =>{
    fs.rename('./text.txt',"./text1.txt",(err)=>{
        if(err) throw err
        console.log('rename done');
        
    })
}

renameFile()