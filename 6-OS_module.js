const { log } = require('console')
const os = require('os')

//Info about current user
const user = os.userInfo()

console.log(user)

//The system uptime in seconds

console.log(os.uptime())