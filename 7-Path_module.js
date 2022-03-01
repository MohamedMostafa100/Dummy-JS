const path = require('path')

const filepath= path.join('Content','Subfolder','text.txt')

console.log(filepath)

const base= path.basename(filepath)

console.log(base)

const abs= path.resolve(__dirname,'Content','Subfolder','text.txt')

console.log(abs)