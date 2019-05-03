# Books-A-Bajillion

See the live version here: [http://booksabajillion.slothcrew.com](http://booksabajillion.slothcrew.com)

This is a simple project to practice a few different concepts:

- UI
- Design
- Augumenting one API data with another
- Utilizing serverless functions
- Utilizing React Hooks for lifecycle and state management

## UI and Design

I wanted to push the limits of what I was comfortable with design-wise. While the wood background bookshelf look isn't anything new (Looking at you iBooks 👀), doing cards that flip on hover, responsive design with media queries, and mixing flexbox and grid displays were things I had done in projects past, but never in a combined design. One of the biggest challenges regarding the design aspect of it was to translate what I had envisioned in Figma to actual code that looked and performed the same way I had hoped. And the star rating system... That was a little bit of a pain to figure out on my own. I could have just used a component available in NPM but I wanted to try to solve this one on my own. <br>
Things that I still need to improve:

- The navbar layout ocupies over half the screen on small devices. Maybe having the option to colapse the navbar if the screen is smaller than X will be enough to deal with this.
- The star rating system only works with whole numbers, so I'm rounding any decimal points. This is functional, but definitely not desireable, so on the next version I want to add the option for half-stars.

## Augumenting one API data with another

For this project, I am fetching a list of books from one endpoint, and then augmenting the information from this list with cover images, ratings, and a synopsis from the Google Books api.

## Utilizing serverless functions

I went with Zeit's serverless functions. There are plenty of options out there, but I just wanted a quick endpoint that would spit back a json file with the data I needed to continue working on the Front End. This was my first foray into the world of serverless functions, but the experience was pretty seamless so I will probably incorporate more of this kind of workflow in future projects.

## Utilizing React Hooks for lifecycle and state management

I had been using hooks for a couple of things here and there, but for this project all of the state and lifecycle methods were done using hooks. I ended up utilizing the ReactN library to manage state globaly, but in a future version of this, I will re-write the code to utilize context instead.

---

## To run this project locally

In the project directory, you can run:

### `npm install`

Will download all dependencies to run the project

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Requirements

NodeJS - ^11.3.0
