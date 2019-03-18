const test = require('ava');
const Util = require('./util');

test.beforeEach(t => {
  // eslint-disable-next-line no-param-reassign
  t.context.utils = new Util();
});

test('Util: validateToken (required)', t => {
  const { utils } = t.context;

  utils.validateToken();
  t.is(utils.errors[0], 'Token is required.');
  t.is(utils.errors.length, 1);
});

test('Util: validateToken (malformed)', t => {
  const { utils } = t.context;

  utils.validateToken('1234567890');
  t.is(utils.errors[0], 'Token is malformed.');
  t.is(utils.errors.length, 1);
});

test('Util: validateToken (okay)', t => {
  const { utils } = t.context;

  utils.validateToken('1234567890123456789012345678901234567890');
  t.is(utils.errors.length, 0);
});

test('Util: validateRepo (required)', t => {
  const { utils } = t.context;

  utils.validateRepo();
  t.is(utils.errors[0], 'Repository is required.');
  t.is(utils.errors.length, 1);
});

test('Util: validateRepo (malformed)', t => {
  const { utils } = t.context;

  utils.validateRepo('ftonato');
  t.is(utils.errors[0], 'Repository is malformed.');
  t.is(utils.errors.length, 1);
});

test('Util: validateRepo (okay)', t => {
  const { utils } = t.context;

  utils.validateRepo('ftonato/gh-comment-cli');
  t.is(utils.errors.length, 0);
});

test('Util: validateIssue (required)', t => {
  const { utils } = t.context;

  utils.validateIssue();
  t.is(utils.errors[0], 'Issue number is required.');
  t.is(utils.errors.length, 1);
});

test('Util: validateIssue (okay)', t => {
  const { utils } = t.context;

  utils.validateIssue(1);
  t.is(utils.errors.length, 0);
});

test('Util: validateBody (required)', t => {
  const { utils } = t.context;

  utils.validateBody();
  t.is(utils.errors[0], 'Comment is required.');
  t.is(utils.errors.length, 1);
});

test('Util: validateBody (okay)', t => {
  const { utils } = t.context;

  utils.validateBody(
    '[I loved this new client to comment on GitHub issues](https://www.npmjs.com/package/gh-comment-cli)'
  );
  t.is(utils.errors.length, 0);
});

test('Util: validateEntries (okay)', t => {
  const { utils } = t.context;

  const token = '1234567890123456789012345678901234567890';
  const repo = 'ftonato/gh-comment-cli';
  const issue = 1;
  const body =
    '[I loved this new client to comment on GitHub issues](https://www.npmjs.com/package/gh-comment-cli)';

  utils.validateEntries(token, repo, issue, body);
  t.is(utils.errors.length, 0);
});
