const apiUrl = 'http://localhost:3000/api'
const addToken = (url, token) => {
  return url + '&access_token=' + token;
}

export const login = (data) => {
  var options = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({username: data.username, password: data.password})
  };
  console.log('Login: ' + JSON.stringify(options))
  return fetch(apiUrl + '/Users/login', options).then(response => {
    return response.json();
  }).then(json => {
    return json
  });
};

export const register = (data) => {
  var options = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({username: data.username, password: data.password, email: data.email})
  };
  return fetch(apiUrl + '/Users', options).then(response => {
    return response.json();
  }).then(json => {
    return json
  });
};


export const logout = (token) => {
  var options = {
    method: "POST"
  };
  return fetch(addToken(apiUrl + '/Users/logout', token), options).then(response => {
    if (response.status == 204) 
      return 0;
    else 
      return response.json
  })
};
