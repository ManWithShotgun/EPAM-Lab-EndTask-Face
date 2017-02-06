var users={
  '1': {password:'1', role: 'admin', name: 'Name1',email: 'Email1'}
};
var tokens=[];

class customAuth{
  login(req, res){
    let username=req.query.username;
    let password=req.query.password;
    console.log(`login: ${username}|${password}|${users[username].name}|${users[username].email}`);
    const userExists = doesUserExist(username);
    if (userExists && password===users[username].password) {
      var jwt = require('jsonwebtoken');
      var token = jwt.sign({ role: users[username].role }, '123');
      // let token=Math.random().toString(36).substring(7);
      tokens.push(token);
      resSendWithAccess(res,{
          authenticated: true,
          token: token,
          user: users[username]
        });
    }else{
      let error;
      if(userExists){
        error={type: 'password-wrong'};
      }else{
        error={type: 'user-doesnt-exist'}
      }
      resSendWithAccess(res,{
          authenticated: false,
          error: error
        });
    }
  }

  logout(req, res){
    let token=req.query.token;
    console.log(`logout token: ${token}`);
    resSendWithAccess(res,{logout: true});// не хочу заморачиваться проверкой
  }

  register(req, res){
    let username=req.query.username;
    let password=req.query.password;
    let name=req.query.name;
    let email=req.query.email;
    let role=req.query.role;
    console.log(`reg: ${username}|${password}|${role}|${name}|${email}`);
    if (!doesUserExist(username)) {
      users[username]={password, role, name, email};
      resSendWithAccess(res, {
        registered: true
      });
    } else {
      resSendWithAccess(res, {
        registered: false,
        error: {
          type: 'username-exists'
        }
      });
    }
    console.log('USERS:');
    for(let user in users){
      console.log(`  ${user}|${users[user].role}`);
    }
  }
}

function resSendWithAccess(res, json) {
  res.set({
    'Access-Control-Allow-Origin': '*'
  });
  return res.json(json);
}

function doesUserExist(username) {
    return !(users[username] === undefined);
}

module.exports=new customAuth();
