# React Games

## User Story

As a user, I want to be able to challenge my peers in 2bit style games. I would like see their scores in leaderboards page and sort to see who has scored how many points in what games they have played. 


## Summary
React Games, this is a game center where you can challenge yourself as well as your peers. Play 2bit games and see if you can beat your friends high schore or set a high score for yourself and send to a friend to challenge them and see if they can top your high schore. 

<img src="./client/src/images/landingpage.jpg" alt="landingpage"/>

# Available Scripts & to run the application from your computer once you have cloned the repo:
In the project directory, you can run:

## 'npm install'
This will install all dependencies in order to run the React Application.

## 'npm start'
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.


## How It Works
When the users first access the site, the user will be greeted with a landing page which they have the choice to login if they already have an account. If they do not login, no games or leaderboard pages will able to be accessed. If they do not have an account they can set one up in a matter of seconds by entering a username, email and password. After a successful login the user will be redirected to the game center where they can now select a game to play.


<img src="./client/src/images/gamecenter.jpg" alt="gamecenter"/>

## Dodgeball
If the user selects Dodgeball, they will be taken into the game and be prompted with instructions on how to start the game. "Press Spacebar To Begin." Once spacebar is pressed the game is started and the user can then navigate their way through the pillars of Dodgeball. If it is the users first time playing, the score will save in the leaderboard upon their first collision with a pillar. If the user is a returning user then the score in the leaderboard will only update if their current score is higher than their previous score stored in the leaderboard. 

<img src="./client/src/images/dodgeballstartscreen.jpg" alt="startscreen"/>

<img src="./client/src/images/dodgeball.jpg" alt="dodgeball"/>

<img src="./client/src/images/dodgeballgameover.jpg" alt="gameover"/>

## Pong
If the user selects Pong, they will be taken into the game, this game will run as soon as the page is loaded so be ready. Use the "up" and "down" arrow keys to control your slider on the left hand side of the viewport. If it is the users first time playing, the score will save in the leaderboard upon their first loss to AI. In this game if the AI gets a score of 5 then you automatically lose. If the user is a returning user then the score in the leaderboard will only update if their current score is higher than their previous score stored in the leaderboard. 

<img src="./client/src/images/pongstart.jpg" alt="pongstart"/>

<img src="./client/src/images/ponggameover.jpg" alt="ponggameover"/>

## Leaderboard
The leaderboard page can only be viewed once the user has successfully logged in. Here the user can search their high scores or a friends by username. They can also sort the scores highest-lowest or lowest to highest. 

<img src="./client/src/images/leaderboard.jpg" alt="leaderboard"/>

<img src="./client/src/images/sortleaderboard.jpg" alt="sortleaderboard"/>

<img src="./client/src/images/searchleaderboard.jpg" alt="searchleaderboard"/>

## Technologies
<ul>
<li>JWT Authentication</li>
<li>React.js</li>
<li>JavaScript</li>
<li>Express</li>
<li>MongoDB</li>
<li>Mongoose</li>
<li>bcrypt</li>
<li>React-Table</li>
<li>Heroku Hosting</li>
</ul>


## Creators
<ul>
<li>Brock Thigpen - Back end - React, Javascript, Database, Authentication, React Table implentation</li>
<li>Brandon "Tyler" Cauley - Front end - Game Integration, Back end - Game integration, React, Javascript</li>
<li>Josh Craig - Designing the UI, Wireframe, Styling, Layout, Theme</li>
<li>Patrick Dorgu - React Table - Leaderboard</li>
</ul>

## View
View my deployed application here:

<a href="https://reactgames.herokuapp.com/">React Games</a>
