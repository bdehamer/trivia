# Trivia App

## Set-up

Start by installing all of the project dependencies:

```
npm install
```

Next, create the SQLite database and load the schema:

```
npm run db:init
```

The following command will start the server in "watch" mode (meaning that any
code changes you make will automatically restart the server):

```
npm run start
```

## Requirements

- The default page should display a form which allows the user to enter the name
  of their trivia team.
- Submitting the form should result in a POST to the `/signup` route which will
  insert a new record into the `teams` table.
- The `/admin` route should display a page which displays all of the team names
  along with their associated sign-up date (sorted by descending sign-up date).

## Resources

- [express](https://expressjs.com/en/4x/api.html)
- [ejs](https://ejs.co/)
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3/blob/master/docs/api.md)
