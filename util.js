class Util {
  constructor() {
    this.errors = [];
  }

  validateToken(token) {
    if (!token) {
      this.errors.push('Token is required.');
    } else if (token.length !== 40) {
      this.errors.push('Token is malformed.');
    }
  }

  validateRepo(repo) {
    if (!repo) {
      this.errors.push('Repository is required.');
    } else if (repo.indexOf('/') === -1) {
      this.errors.push('Repository is malformed.');
    }
  }

  validateIssue(issue) {
    if (!issue) {
      this.errors.push('Issue number is required.');
    }
  }

  validateBody(body) {
    if (!body) {
      this.errors.push('Comment is required.');
    }
  }

  validateEntries(token, repo, issue, body) {
    this.validateToken(token);
    this.validateRepo(repo);
    this.validateIssue(issue);
    this.validateBody(body);

    return this.errors;
  }
}

module.exports = Util;
