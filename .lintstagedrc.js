module.exports = {
  '*': ['eclint fix'],
  '*.js': ['eslint --fix', 'prettier --write'],
  '*.md': ['prettier --write', 'markdownlint'],
};
