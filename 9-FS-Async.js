const fs=require('fs')


fs.readFile('./Content/Subfolder/First.txt','utf8',(err, Result)=>{
if(err){
console.log(err)
return
}
const first=Result
fs.readFile('./Content/Subfolder/Second.txt','utf8',(err, Result)=>{
    if(err){
        console.log(err)
        return
        }
        const second=Result
fs.writeFile('./Content/Subfolder/Result_async.txt', `Hello: ${first}, ${second}`,(err, Result)=>{
    if(err){
        console.log(err)
        return
        }
        console.log(Result)



}
)

}
)

}
)