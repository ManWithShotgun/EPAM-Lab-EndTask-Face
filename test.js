var jwt = require('jsonwebtoken');
var token = jwt.sign({ role: 'user' }, 'privateKey');
console.log(token);
