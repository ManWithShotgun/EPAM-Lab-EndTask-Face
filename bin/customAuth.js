var users={
  '1': '1'
};
var tokens=[];

class customAuth{
  login(req, res){
    let username=req.query.username;
    let password=req.query.password;
    console.log(`login: ${username}|${password}`);
    const userExists = doesUserExist(username);
    if (userExists && password===users[username]) {
      let token=Math.random().toString(36).substring(7);
      tokens.push(token);
      resSendWithAccess(res,{
          authenticated: true,
          token: token
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
    resSendWithAccess(res,{logout: true});// не хочу заморачиватся проверкой
  }

  register(req, res){
    let username=req.query.username;
    let password=req.query.password;
    console.log(`reg: ${username}|${password}`);
    if (!doesUserExist(username)) {
      users[username]=password;
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
      console.log(`  ${user}|${users[user]}`);
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
