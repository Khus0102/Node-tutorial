const os = require("os");

//info about current user
const user = os.userInfo();
console.log(user);

//method returns the current uptime of the system

console.log(`the system uptime is ${os.uptime()} secounds`);

const currentOs = {
  name: os.type(),
  totalmemory: os.totalmem(),
  freememory: os.freemem(),
  release: os.release(),
};
console.log(currentOs);
