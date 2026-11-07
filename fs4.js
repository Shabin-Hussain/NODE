//import fs
const fs = require('fs')

const delFile = ()=>{
    fs.unlink('./text1.txt',(err)=>{
        if (err) throw err

        console.log('file deleted successfully');
        
    })
}

delFile()