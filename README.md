# Crossword Puzzle
###### A crossword puzzle built with React and Rails | [The Back End](https://github.com/zluo16/crossword-puzzle-api) | [Demo](https://crossword-puzzle.herokuapp.com/)

![Crossword Puzzle Screen Shot](https://raw.githubusercontent.com/zluo16/crossword-puzzle-react/public/crossword-puzzle-screen-shot.png?raw=true "Title")

## App description
- This is an application that generates crosswords puzzles. It does this by
randomly picking a pre-generated crossword from its Rails back end. The database
currently contains 30 crossword puzzles. Ideally, I would've liked the database
to have at least a hundred different crosswords, but in order to fit on Heroku
I had to limit it to 30.
- I pulled all clues and answers from a [Jeopardy API](http://www.jservice.io/). The database currently
has has 6065 words.
- I wanted users to have the ability to keep track of their scores. To create
this feature I built fully functioning user authentication (this was obviously
a lot more than was necessary to build this feature, I partly used this
opportunity to get more comfortable with user auth using JSON web tokens.)
- I added a top five users board (I think there's only three users in the db
currently). In order to keep track of this, I had to create a functionality that
sends a signal to the backend to increment up a user's score every time a user
completes a crossword.

## Clone & run application

### Clone front end repo:
```bash
git clone git@github.com:zluo16/crossword-puzzle-react.git
```

### Clone back end repo:
```bash
git clone git@github.com:zluo16/crossword-puzzle-api.git
```

### Install & run front end:
```bash
npm install && npm start
```

### Install & run back end:
```bash
bundle install && rails s
```
