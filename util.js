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
/* 
const errors = [];

const validateRepo = repo => {
  if (!repo) {
    errors.push('Repository is required.');
  } else if (repo.indexOf('/') === -1) {
    errors.push('Repository is malformed.');
  }
};

const validateIssue = issue => {
  if (!issue) {
    errors.push('Issue number is required.');
  }
};

const validateBody = body => {
  if (!body) {
    errors.push('Comment is required.');
  }
};

const validateEntries = (token, repo, issue, body) => {
  validateToken(token);
  validateRepo(repo);
  validateIssue(issue);
  validateBody(body);

  return errors;
};

module.exports = {
  validateEntries
}; */
