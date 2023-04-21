addSubDomain({
  description: 'I want to publish my profile',
  domain: 'is-an.app',
  subdomain: 'patel-monal',
  owner: {
    repo: 'https://github.com/patel-monal/patel-monal.github.io',
    email: 'monal.patel@truestaz.com,
  },
  record: {
    CNAME: 'patel-monal.github.io',
  },
  proxy: false,
})
