const test = require('ava');
const axios = require('axios');
const comment = require('./gh-comment');

const repo = 'ftonato/gh-comment-cli';
const token = process.env.GITHUB_TOKEN;
const issue = 1;

test.beforeEach(t => {
  const get = id => {
    return axios({
      method: 'GET',
      url: `https://api.github.com/repos/${repo}/issues/comments/${id}`,
      headers: { Authorization: `token ${token}` }
    })
      .then(response => response.data.body)
      .catch(error => error);
  };

  // eslint-disable-next-line no-param-reassign
  t.context = {
    get
  };
});

test('add a comment on { repo }/{ issue }', async t => {
  const content = `comment ${new Date().getTime()}`;

  const response = await comment(token, repo, issue, content);
  const commentId = response.data.id;

  t.is(await t.context.get(commentId), content);
});

test('bad request (token invalid)', async t => {
  const error = await t.throwsAsync(comment);
  t.is(error.message, 'Bad credentials');
  t.is(error.status, 401);
});
