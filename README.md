# Game of Drones
This is a 'rock, paper, scissors' game.

## Getting Started
To get up and running with this project you need to follow these steps:
1. Add an folder in the directory /backend/ named `keys` and drop the database credentials file sent by email on that folder with the same name sent 'serviceAccountKey.json'. `./backend/keys/serviceAccountKey.json` must exist an be a valid key to connect to my database. It's also possible to create a Firebase Realtime Database and add any serviceAccountKey.json Google gives to you on that directory.
2. Run `$ npm install` or `$ yarn install` on the project directory to install all dependencies.
3. Then run `$ npm start` or `$ yarn start` to build the application and get up and running with the server.
*The server will run on port 80, so it's very important to ensure that this port isn't being used by any other process.*

## Architecture

### Front end
The front end was developed with React for managing UI and Redux for managing state.
HTML Fetch api for ajax on initial requests and Socket.io-client to listen to new games on the server.
For styles Sass were used with .scss syntax with an mixed aproach of css methodologies:
BEM for class naming conventions, ITCSS for directory structure and Atomic Design for component styles hierarchy.

### Back end
As an hybrid serverless aproach used to show a bit of knowledge on both subjects,
I choose Firebase as a serverless database which I'm using to store games and players data,
and NodeJS with Express and Socket.io in the between of the client and the Firebase's Realtime Database.

### Design
I based on a Google's Material Design concepts for colors and shadows.
Font sizes were scaled based on a third minor scale. https://type-scale.com/ and https://www.modularscale.com/ for more information about the subject. (I realy recomend any UI designer and front end developer to give a try to this aproach)
And for an easily readable font face, Open Sans was choose.

## Versions
The application was validated with these:
`$ npm -v`
5.6.0

`$ node -v`
v9.10.0

`$ yarn -v`
1.5.1

