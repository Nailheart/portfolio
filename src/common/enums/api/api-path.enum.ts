enum ApiPath {
  ROOT = 'https://api.github.com',
  REPOS = '/users/Nailheart/repos',
  REPO_$NAME_TAGS = '/repos/Nailheart/:name/tags',
  REPO_$NAME_LANGUAGES = '/repos/Nailheart/:name/languages',
  SUBSCRIPTIONS = '/users/Nailheart/subscriptions',
  FOLLOWERS = '/users/Nailheart/followers',
}

export { ApiPath };
