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
When the users first access the site, the user will be greeted with a landing page which they have the choice to login if they already have an account. If they do not have an account they can set one up in a matter of seconds by entering a username, email and password. After an a successful login the user will be redirected to the game center where they can now select a game to play.


<img src="./client/src/images/gamecenter.jpg" alt="gamecenter"/>

## How It Works
If the user selects Dodgeball, they will be taken into the game and be prompted with instructions on how to start the game. "Press Spacebar To Begin." Once spacebar is pressed the game is started and the user can then navigate their way through the pillars of Dodgeball. If it is the users first time playing, the score will save in the leaderboard upon their first collision with a pillar. If the user is a returning user then the score in the leaderboard will only update if their current score is higher than their previous score stored in the leaderboard. 



<img src="./client/src/images/dodgeball.jpg" alt="dodgeball"/>
