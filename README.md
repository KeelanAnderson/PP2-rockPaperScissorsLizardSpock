# rockPaperScissorsLizardSpock

rockPaperScissorsLizardSpock is a game of chance played against the computer. The game is an expansion on the game Rock, Paper, Scissors. Each player picks a variable and reveals it at the same time. The winner is the one who defeats the others. In a tie, the process is repeated until a winner is found. The player will enter a game of best of five against the computer so the first to win 3 rounds will be crowned the winner. The game is aimed at people of all ages and can be used by all to make decisions, settle disputes or just have some fun online. Statistically speaking its been proven that in the game of rock, paper, scissors, players who know each other are more likely to draw. This game expands the outcomes to make it more challenging and since its played against the computer, the computer choice is completely random so the outcomes end in a fairer result.

![ am i responsive image ](/readme-images/amiresponsive-image.jpg "Text to show on mouseover")

## Features
### Existing Features
#### Heading

the rockPaperScissorsLizardSpock game heading is featured at the top of the page and is written in camelcase style as this is a javascript project.

![ heading image ](/readme-images/rpsls-heading.jpg "Text to show on mouseover")

#### Menu

the menu is the first page users will see when opening the site. The menu has 2 buttons. It is very simplistic and is made this way for easy navigation through the site. the first button is labelled 'best of five' and will bring the user straight into the game. The second button is labelled rules and will bring the user to a page explaining all the rules of the game. when hovered over the buttons will get slighted larger and the pointer cursor will appear making it obvious to the user that they are clickable buttons.

![ menu image ](/readme-images/rpsls-menu.jpg "Text to show on mouseover")


#### Rules

The rules page contains a paragraph explaining what the game is, a diagram displaying all the different outcomes and a list of each outcome.

![ rules image ](/readme-images/rpsls-rules.jpg "Text to show on mouseover")

There is an x icon in the top right corner of the page that when clicked will navigate the user back to the menu. At the end of the page there is another clickable link back to the menu clearly labelled 'go back to menu'. the reason i have added a second link to the menu page is that in the case that the user has scrolled the the bottom of the page they will no long see the button in the top right corner and upon finishing reading the rules they will have the instant option to go back to the menu to get into the game as quickly as possible.

![ rules diagram and outcome image ](/readme-images/rpsls-rules2.jpg "Text to show on mouseover")

#### Game
##### Controls Area
The Controls Area consists of 5 buttons with the name of each choice inside. Once clicked the round will begin and the players choice will be dislpayed on the left hand side of the screen. It has the heading controls so the user knows to what the buttons are for. When hovered over the buttons will get slighted larger and the pointer cursor will appear making it obvious to the user that they are clickable buttons.

![ controls image ](/readme-images/rpsls-controls.jpg "Text to show on mouseover")

##### Choice display

Once the player made there choice the computer choice will be displayed at ther same and the winner will be revealed. the player choice is displayed on the left and the computer choice is displayed on the right. This is clearly labelled to avoid confusion for the user. inside the choice display is an image of the outcome chosen by both the player and the computer.

![ choice display image ](/readme-images/rpsls-choices.jpg "Text to show on mouseover")

##### Result Display

Just underneath the choice display the result display will pop up once the round has finished saying either 'you win' or 'you lose'. The result is only displayed after a choice as been made to keep the game page clear and simple.

![ results display image ](/readme-images/rpsls-results.jpg "Text to show on mouseover")

##### Score

the score is displayed directly under the choice display for both sides. Whoever wins the round their score will increment by 1. the first to win 3 rounds will be crowned the overall winner.

![ player score image ](/readme-images/rpsls-playerscore.jpg "Text to show on mouseover")
![ computer score image ](/readme-images/rpsls-computer.jpg "Text to show on mouseover")

##### Exit Game

In the bottom right corner is an option the exit the game if the user wishes to leave the game early. if this button is clicked the game will be over and the user will be returned to the menu page and no overall winner will be chosen. when hovered over the link will have the pointer cursor.

![ exit image ](/readme-images/rpsls-exitgame.jpg "Text to show on mouseover")

#### Features Left To Implement

some features I would like to implement to the game would be a larger variety of game modes. I would also like a implement of feature where players could enter a username and be listed on a high scores page.

some other features I would also like to implement is if the images displayed showed to outcome in an animation. for example if player chose rock and computer chose scissors in the animation the scissors would cut the paper.


## Testing 

### Browser and Screen Size Testing

- I tried my website on as many different browsers as I could like Chrome, Microsoft Edge, Avast Secure, Safari, Opera and firefox.

- I also tested my website on my Iphone, Ipad and Computer and was happy with the outcome on each device.

- I used the web developer tools consistenly to ensure my website was responsive at mobile screen sizes and then at larger screen sizes. I used the device feature of dev tools to test my website on all devices available.

- I tried to commit my changes as much as possible. Like the testing I did this throughout the project to ensure I had lots of versions, and I could go back to a previous version should a major error occur.

### Validator Testing

#### HTML
- No errors were returned when passing through the official W3C validator
#### CSS
- No errors were returned when passing through the official (Jigsaw) validator
#### JavaScript
- No errors were returned when passing through the official JSHint validator

#### Lighthouse

I also analysed my project on lighthouse in dev tools.

##### Metrics

- There are 11 functions in this file.

- Function with the largest signature take 1 arguments, while the median is 0.

- Largest function has 10 statements in it, while the median is 2.

- The most complex function has a cyclomatic complexity value of 4 while the median is 1.



### Unfixed Bugs

when the game page is first opened a border is displayed in the choice displays before any choice has been made where the images appear after the game has started. I did not fix this feature as i do not think it affects the pages design negatively and how the choice areas more clearly at the start of the game for the user, so I decided to leave it that way.

## Deployment

This site was deployed to GitHub pages.

I created my Repository on Github and coded the entire project on Gitpod. VSCode is my text editor. It has a built in terminal so I could do everything I needed in one place. GitHub is where my repository is held externally. I deployed the site to Github Pages from Github in the repository settings where I set the branch to main and saved it. I then refreshed the page and a detailed ribbon was displayed saying my site was successfully deployed.

- The live link can be found here - https://keelananderson.github.io/rockPaperScissorsLizardSpock/

## Credits

### content

- To my mentor, Andre Aquilina , for guiding me through the process and offering assistance when neccesary to point me in the right direction.
- The Slack community. The help a student is able to receive from the other students is a really great tool to have.
- To all at Code Institute, for the videos and information I received.
-  HTML5 provided the content and the structure of my website. I tried to use semantic elements where possible to ensure the best structure.
- CSS was used to style my web pages.
- The icons used in the rules and game pages were taken from https://fontawesome.com/.
- The fonts I used were imported from https://fonts.google.com/.
- The image used to show my website is fuly responsive is taken from https://ui.dev/amiresponsive?.
- I used https://www.w3schools.com/ and https://stackoverflow.com/ a lot throughout my project to help me when I was stuck with how to write my code.
examples
-https://www.w3schools.com/howto/howto_js_redirect_webpage.asp. this helped me learn how to redirct to other webpages with javascript.

https://stackoverflow.com/ was fundamental in helping my to build a data structure and the getResult function in my project.


- I got help from this youtube video when starting my project and was very helpful and i took a lot of inspiration from this in my project starting out but later created better ways to run my functions myself. The arrow function is used in my project is from the tutorial. https://www.youtube.com/watch?v=RwFeg0cEZvQ&t=1054s 

- the content on the rules page was taken from https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock

### Media

The images used for this website were taken from https://www.pngaaa.com/download/4532035 and https://www.akshaybahadur.com/post/rock-paper-scissors-lizard-spock.

the images for my README.md FILE cropped and edited using paint.


