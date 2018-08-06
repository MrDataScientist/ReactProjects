# React Apollo and GraphQL GitHub Client

## Features

* React V 16 with create-react-app CLI
* Responsive
* React Router 4
* Apollo with GitHub GraphQL API
  * Queries and Mutations with render props
  * Optimistic Updates
  * Pagination
  * Optimistic Fetch (e.g. Issues)
    * not everywhere for the purpose of demonstrating though

## Installation

* `git clone git@github.com:rwieruch/react-graphql-github-apollo.git`
* cd react-graphql-github-apollo
* add your own [GitHub personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) in a .env file in your root folder
  * scopes/permissions you need to check: admin:org, repo, user, notifications
  * REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN=xxxXXX
* npm install
* npm start
* visit `http://localhost:3000`

