const fs=require('fs')

const first= fs.readFileSync('./Content/Subfolder/First.txt')
const second= fs.readFileSync('./Content/Subfolder/Second.txt')

console.log(`Hello: ${first}, ${second}`)

fs.writeFileSync('./Content/Subfolder/Result.txt', `Hello: ${first}, ${second}`)