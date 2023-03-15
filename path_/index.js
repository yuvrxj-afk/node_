const path = require('path')
const fs = require('fs')

const dirPath = path.join(__dirname, 'files')
// console.warn(dirPath);

// for (i = 1; i <= 5; i++) {
//     fs.writeFileSync(dirPath + `/new${i}.txt`, 'new');
// }

fs.readdir(dirPath, (e, files) => {
    // console.warn(files);
    files.forEach((item) => {
        console.log(item);
    })
    if (e) console.warn(e);
})