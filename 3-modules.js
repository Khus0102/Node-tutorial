//Modules:- encapsulate (share minimim)
const names = require("./4-names");
const sayHi = require("./5-utils");
const Data = require("./6-Alternative");
console.log(Data.singlePerson, Data.items);
console.log(names);
require("./7-mindGrenades");
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
