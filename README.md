# gh-comment-cli [![Build Status](https://travis-ci.com/ftonato/gh-comment-cli.svg?branch=master)](https://travis-ci.com/ftonato/gh-comment-cli)

> Comment on a specific issue on GitHub from the command-line

## Install

```
$ npm install --global gh-comment-cli
```

## Usage

```
$ gh-comment --help

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

```

⚠️ You can create a [personal access token on GitHub here](https://github.com/settings/tokens)

## License

[MIT](LICENSE) © Ademílson F. Tonato
