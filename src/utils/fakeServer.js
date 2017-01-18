let users={
  admin: '1'
};
let localStorage = global.window.localStorage;

/*Пароли хранятся в открытом виде*/
var server = {
  init() {
    /*Если локал стор пуст, загружает дефолтные данные. encrypted используется только в этом if*/
    if (localStorage.users === undefined || !localStorage.encrypted) {
      users = {
        user: 'user'
      };
      localStorage.users = JSON.stringify(users);
      localStorage.encrypted = true;
    } else {
      users = JSON.parse(localStorage.users);
    }
  },

  login(username, password, callback) {
    const userExists = this.doesUserExist(username);
    if (userExists && password===users[username]) {
      if (callback) callback({
        authenticated: true,
        token: Math.random().toString(36).substring(7)
      });
    } else {
      if (userExists) {
        var error = {
          type: 'password-wrong'
        }
      } else {
         error = {
          type: 'user-doesnt-exist'
        }
      }
      if (callback) callback({
        authenticated: false,
        error: error
      });
    }
  },

  register(username, password, callback) {
    if (!this.doesUserExist(username)) {
      users[username]=password;
      localStorage.users = JSON.stringify(users);
      if (callback) callback({
        registered: true
      });
    } else {
      if (callback) callback({
        registered: false,
        error: {
          type: 'username-exists'
        }
      });
    }
  },

  logout(callback) {
    localStorage.removeItem('token');
    if (callback) callback();
  },

  doesUserExist(username) {
    return !(users[username] === undefined);
  }
}

server.init();

module.exports = server;
