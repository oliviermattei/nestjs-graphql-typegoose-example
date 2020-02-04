git filter-branch -f --env-filter "
    GIT_AUTHOR_NAME='Olivier Mattei'
    GIT_AUTHOR_EMAIL='olmattei@gmail.com'
    GIT_COMMITTER_NAME='Olivier Mattei'
    GIT_COMMITTER_EMAIL='olmattei@gmail.com'
  " HEAD
