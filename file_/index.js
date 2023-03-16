const fs = require('fs')
const path = require('path')
const dir = path.join(__dirname, 'crud')
const filePath = `${dir}/newer.txt`

// fs.writeFileSync(filePath, "new file")


// fs.readFile(filePath,'utf-8',(e,item)=>{
// console.log(item);
// })

// fs.appendFile(filePath,'more new',(err)=>{
//     if(!err)console.log("file updated");
// })

// fs.rename(filePath,`${dir}/newer.txt`,(err)=>{
//     if(!err)console.log("updated.");
// })

// fs.unlinkSync(filePath)