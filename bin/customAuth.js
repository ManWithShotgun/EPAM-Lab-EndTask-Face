var users={
  '1': {password:'$2a$10$MQAAAAAAAAAAAAAAAAAAA.8iX7Z1kXoAWhOQtH5LCCTxha5DQ1442', role: 'admin', name: 'Name1',email: 'Email1', img:'/dist/public/default-user.jpg'}
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
      var account=users[username];
      account.login=username;
      delete account.password;
      tokens.push(token);
      resSendWithAccess(res,{
          authenticated: true,
          token: token,
          account: account
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

  profileUpdate(req, res){
    let username=req.body.username;
    let password=req.body.password;
    let account=JSON.parse(req.body.account);
    console.log('ProfileEdit: '+username, password);
    console.log('account: '+account);
    const userExists = doesUserExist(username);
    console.log('if: '+userExists+' || '+(users[username].password==password));
    if (userExists && password===users[username].password) {
      var jwt = require('jsonwebtoken');
      var token = jwt.sign({ role: account.role }, '123');
      delete account.password;
      resSendWithAccess(res,{
          success: true,
          token: token,
          account: account
        });
    }else{
      let error;
      if(userExists){
        error={type: 'password-wrong'};
      }else{
        error={type: 'user-doesnt-exist'}
      }
      resSendWithAccess(res,{
          success: false,
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
    let img='/dist/public/default-user.jpg';
    console.log(`reg: ${username}|${password}|${role}|${name}|${email}`);
    if (!doesUserExist(username)) {
      users[username]={password, role, name, email, img};
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
