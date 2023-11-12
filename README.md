
# Language Learning Game Backend

This repo is the backend of the Language Learning Game, which is a personalized learning via quizzing platform to become a master of multiple languages.



## Features

- Quiz generator based on level
- Answers saved in the database. Can continue quiz anytime at last saved level
- Authentication using name and email
- Stats of previous exercises
- Leaderboard for each language


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT= <port the backend should run on ex: 4444>`

`NODE_ENV= development`

`REACT_APP_FRONTEND_URL= <ex: http://localhost:3000>`

`SERVER_URL= <ex: http://localhost:4445>`

`MONGO_URL= <url of mongodb server>`

`JWT_SECRET= <this secret string will be used for generating tokens>`

## Run Locally

Clone the project

```bash
  git clone https://github.com/Manoj1011/Language_Learning_Game_Backend.git
```

Go to the project directory

```bash
  cd Language_Learning_Game_Backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npx nodemon index.js
```

