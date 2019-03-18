const axios = require('axios');

const comment = (token, repo, issue, body) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: `https://api.github.com/repos/${repo}/issues/${issue}/comments`,
      responseType: 'json',
      data: { body },
      headers: { Authorization: `token ${token}` }
    })
      .then(({ status, data }) => resolve({ status, data }))
      .catch(({ response = { status: 500 } }) => {
        const error = new Error('Bad credentials');
        error.status = response.status;
        error.error = response.data;
        reject(error);
      });
  });
};

module.exports = comment;
