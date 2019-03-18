#!/usr/bin/env node

const meow = require('meow');
const Util = require('./util');
const comment = require('./gh-comment');

const cli = meow(
  `
	Usage
	  $ gh-comment --token --repo --issue --comment
      
      The comment will be written on a specified { issue } based on the { repository } parameter on GitHub

      Options
        --t | --token             GitHub personal access token
        --r | --repo              Repository URL (e.g. username/repo)
        --i | --issue             Issue ID (number) from specified repository
        --c | --comment           Comment to publish on repo/issueID selected

      Examples
        $ gh-comment --t=2j34an52iwo8fdf9fb145e29f4bf886yjn87qa6n --r=ftonato/gh-comment-cli --i=1 --c="How can I help this project?"
      
      Flag examples
        --token=2j34an52iwo8fdf9fb145e29f4bf886yjn87qa6n
        --repo=ftonato/gh-comment-cli
        --issue=1
        --comment="[I loved this new client to comment on GitHub issues](https://www.npmjs.com/package/gh-comment-cli)"
`,
  {
    flags: {
      token: {
        type: 'string',
        alias: 't'
      },
      repo: {
        type: 'string',
        alias: 'r'
      },
      issue: {
        type: 'string',
        alias: 'i'
      },
      comment: {
        type: 'string',
        alias: 'c'
      }
    }
  }
);

const options = cli.flags;

const { token, repo, issue } = options;
const body = options.comment;

const utils = new Util();
const errors = utils.validateEntries(token, repo, issue, body);
if (errors.length > 0) {
  console.error('🚩 Errors:');

  errors.map(error => {
    console.error(`- ${error}`);
  });
} else {
  comment(token, repo, issue, body)
    .then(() =>
      console.info(`️️️✔️️️️ Success:
    - Comment created 🎉`)
    )
    .catch(() =>
      console.error(`❌ Failure:
    - Bad request, please check your token or generate a new personal access token on GitHub - https://github.com/settings/tokens!`)
    );
}
