const HTTP = require('http')

const server= HTTP.createServer((req,res)=>{
if (req.url=== '/')
{
    res.end('Welcome to our home page')
}
if (req.url=== '/about')
{
    res.end('Here is our short history')
}
res.end('get out')
}

)
server.listen(5000)