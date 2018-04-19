# LocalizR!

<img align="right" src="https://s18.postimg.cc/tdute22rt/Screen_Shot_2018-04-16_at_12.43.59.png" width="450"/>

Welcome to the repo for our final project at Makers Academy! Our application is an interactive game that takes the user on a language-learning journey.

__DESIGNED BY__:
- Joshua Holloway
- Hannah Lillis
- Kaari Strack
- Magyar-Hunor Tamas
- Jenny Arenas Marin

<hr>

## Tech Stack

<img src="https://image.ibb.co/czRdzx/la_reactnpm.png" width="100" alight="left"/>

__Front End__:
- React
- CSS (styled components)

__Back End__:
- Node.js
- Express.js
- Mongodb
- Mongoose

__TDD__:
- Jest
- Enzyme
- Cypress

<hr>

## Set-up & Installation :computer:

Open the Terminal (or iTerm) by pressing ⌘ and spacebar.

<img src="https://image.ibb.co/dXVJXH/la_terminal.png" alt="commandspacebar" width="400" align="right"/>

Click [HERE](https://nodejs.org/en/) to download and install node.js if you do not have it.

Verify your installation by typing:
```
$ node -v
```
Clone this repo onto your computer:
```
$ git clone *copy & paste https or SSH link here*
```
Install the required dependencies:
```
$ npm install
```
Run the server, and begin!
```
$ npm run start-dev
```

<hr>

## User Stories :video_game:

__Minimum Viable Product__:

- As someone who travels often, so I can learn useful phrases, I want to be able to practice a language.

__Features__:

- As a user, so I can decide what to practice, I want to be able to select a language.

- As a user, so I can learn a language, I want to be able to choose an answer to a question.

- As a user, so I can play the game, I want to be able to enter my details.

- As a user, so I can keep track of my progress, I want to be able to see my score.

__Extras__

- As a user, so I can play the game, I want to be able to sign up.

- As a user, so I can play the game, I want to able to sign in.

- As a user, so I can enjoy my results, I want to be able to read a comment on how well I did.

- As a user, so I can see as I play if I got the question correct, I want the correct answer to always light up green (1)

- As a user, so I can keep my account secure, I want to be able to sign out.

- As a user, so I can play a random scenario, I want to be able to click a button to randomly choose a quiz for me

- As a user, so I can't cheat and remember the layout of the answers, I want the answers to be in a randomised format each time I play (2)

<hr>

## Approach

__Teamwork and XP values__ 

- Standups

    Each day we held two stand-ups. One in the morning and one in the afternoon. In these sessions we would outline our focus for the day
    and discuss any issues or thoughts anyone was having. 
    
- Retros

    On top of this, we held retros most days to allow for people to discuss what is going well, what isn't going well and what actions we can take to ensure that things improve or continue to go well. This was very important to us as we agreed as a group to divide our coding responsibilities at the start of the project. As I had prior knowledge on React,
    Jest and Enzyme, I was mainly on the Front End. Hannah had prior knowledge in Node so mainly did the Backend. Kaari was
    mostly interested in doing the styling so she focused on that while the remaining team members did a bit of everything. Therefore, these retros were key to making sure that all three separate parts of the project were cohesive
    and the respective people were aware of how the whole project was progressing.

- Knowledge shares

    Due to the aforementioned division of the workload into Front end, Backend and styling, there was nearly always someone who was knowledgeable in each section to help their pair partner get up to speed. 
    Furthermore, as React has a steep learning curve, I made sure that from the beginning I ran knowledge shares on React, Jest and Enzyme. These
    consisted of me talking everyone through the codebase. I would analyse and pick apart each little bit of code to ensure that everyone
    understood what the code was doing and how it all interacts. Throughout these sessions I made sure it was a relaxed atmosphere where everyone
    felt comfortable asking questions or asking me to run over something again. This was one of my highlights of the whole project as I had many
    of my group members tell me how productive the knowledge shares were and thanked me for being calm and clear in my explanations.
    
- TDD to our MVP
    
    As soon as the group agreed to create a language learning app we came up with many great ideas of how to make this something special.
    We narrowed these ideas down to the few that would represent the core functionality of the app, our MVP. It was important to all
    of us that we achieved our MVP through practicing the principles that we learnt throughout our time at Makers(particularly TDD). This is
    what we did and we were proud of it.

<hr>

__What I would have done differently__

1. Simplify our MVP

- Be less ambitious

    Reaching our MVP took longer than we anticipated and we were a day late on reaching it. As a team we were too
    ambitious and didn't recognise that it would take longer to understand the new tech we were learning. 

- Time management

    I learnt that being too ambitious can lead to time management problems. I was the only person in the group to already have a basic understanding
    on what React is and how to TDD it. My previous group project was a pure ReactJS project and we TDD'd throughout the week so 
    I was already aware of how to use Jest and Enzyme to guide our code. Due to this, I probably overlooked the importance of my existing
    experience and was too ambitious in setting out what I wanted from our MVP. Hence, on reflection I would have vocalised to the team
    that we should scale our app back a bit and have our MVP include less functionality. ReactJS is infamous for a steep learning curve and
    I think that I should have vocalised this a bit more. This would have allowed us to hit our deadlines more on time. 


2. Fully test-drive post MVP features

- The allure of more features

    After achieving our MVP through thorough tests we came together to decide upon what remaining features we would like to prioritise. As a
    group we felt it was particularly important that we implemented two specific features into our Front End. These two features I have labelled 1. and 2.
    in the Extras section above (numbers are at the end of the sentences). Without these features we thought that the app would be too basic and
    it wouldn't be significant enough as a final project for our graduation from Makers Academy. Hence, we all worked towards getting these 
    completed by the end of the week.

    The only issue was that by this point my two colleagues working with me on the Front End were a bit exhausted by the complexity of learning React in 8 days and were struggling to TDD the features with me. There is little point in me pushing on with writing
    code if my Front End colleagues need further time to understand how to test the functionality of these features using Jest and Enzyme. Therefore,
    over the coming days I spent time with them going over the syntax and how we are looking to implement these features and thus how we should
    be looking to test it. I regularly paired with them and caught up with them during morning and evening stand-ups and lunchtime retros but
    couldn't consistently help them due to the amount of work we needed to get done. 
    
- Prioritise good practices

    The feature freeze day was rapidly coming up and we hadn't managed to implement much or any of the functionality or tests for the new
    features, so we held a group discussion. It was apparent to everyone that we needed these features otherwise we wouldn't feel content with
    the final project. The group said that they wanted these features implemented either way and told me to get them done ASAP in the two days
    we had remaining. Due to this, I was not able to follow TDD for these features. It is something I regret and I wish that we gave ourselves more time
    to implement these features in a proper test driven manner. Hence, on reflection, we should have also scaled back on our ideas of what our
    post MVP app would look like. In addition to this, we could have followed TDD for the features and just plainly tried to get done as much as possible. In doing this we would have been able to follow good practices from start to finish and not experience the dissatisfaction
    of including a relatively untested features in our project. Not to mention the bugs we experienced would have been solved quicker.



<hr>

## Future Additions

We have three user stories that we were not able to complete in time. We will look to
integrate these into the project after the completion date (12th April) alongside refactoring the code.

- As a user, so I can improve my pronunciation, I want to be able to hear example audio.

- As a user, so I can satisfy my competitiveness, I want to see a leaderboard.

- As a user, so I can follow my story, I want to see the outcome of my answer.


Given more time we would have refactored our code by:

- Extracting questions and answers into our database
- Simplifying functions to follow the SRP closer
- DRYing up our code (if, else statements in particular)
- Clearing up the use of a dirty callback into a child component to steal its state
- Re-organising where state and functions are being held to ensure that each Class is also abiding to the SRP


## Screenshots of use!

<img align="centre" src="https://s18.postimg.cc/ycibsleah/Screen_Shot_2018-04-16_at_12.44.19.png" width="450"/>
<img align="centre" src="https://s18.postimg.cc/d2uphqik9/Screen_Shot_2018-04-16_at_12.44.37.png" width="450"/>
