let url = '/';

switch (process.env.CONTEXT) {
  case 'production':
    url = process.env.URL;
    break;
  case 'deploy-preview':
    url = process.env.DEPLOY_URL;
    break;
  case 'branch-deploy':
    url = process.env.DEPLOY_PRIME_URL;
    break;
  default:
    break;
}

module.exports = {
  name: 'Marcos Gil - web developer',
  shortDesc:
    'Personal web development laboratory',
  url,
};
