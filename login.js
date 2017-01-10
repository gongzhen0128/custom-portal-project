window.addEventListener('load', function() {

  var auth0 = new Auth0({
    domain: AUTH0_DOMAIN,
    clientID: AUTH0_CLIENT_ID,
    callbackOnLocationHash: true,
    callbackURL: AUTH0_CALLBACK_URL,
  });

  document.getElementById('btn-login').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    auth0.login({
      connection: 'Username-Password-Authentication',
      responseType: 'token',
      email: username,
      password: password,
    }, function(err) {
      if (err) {
        window.location.href="profile.html";
      } else {
        window.location.href="profile.html";
      }
    });
  });

 
 
});
