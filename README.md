# Fun Club
The live link can be found here - https://jyotiyadav2508.github.io/Game-Rock-Scissors-Paper/

Fun Club website provides a game "Rock-Scissors-Paper". This site is targeted towards adults and children to have fun time, reduces stress, to have a little break during work and study. It is not always possible to play with friends; therefore, this game provides Computer as your opponent. The computer chooses its options randomly, therefore game gives you a fair result. User of this game will learn the rules of Rock, Scissors, Paper which they can apply in decision making with others in their lives.


![Responsive Mockup](https://github.com/jyotiyadav2508/Game-Rock-Scissors-Paper/blob/main/screenshots/mockup-img.png)

## UX/UI 

### Site Goals

The site goal is to provide a user simple, fair and well instructed game. Also make it easy for user to check not only their each own step but also the computer's decision. The site should be easy to navigate as well as aesthetically pleasing.

### User Stories

- To be able to find relevant content
- To be able to view the site on a range of device sizes.
- Easy to understand the game rules and apply them successfully.
- Enable to see their actions and game score.
- All buttons and links works perfectly.
- Able to easily understand icons and text. 
  
## Design

- Choose a variety of greens, yellows, oranges, browms, blues, black.
- Use google font to import the chosen fonts for use in the site.
- Ensure images and icons are relevant to context.

## Wireframes

 All wireframes created in UX stage. [See here](https://github.com/jyotiyadav2508/Game-Rock-Scissors-Paper/blob/main/assets/Rock-paper-scissors-wireframe.pdf)

## Features

### Existing Features

- __Header__

  - Featured at the top-left corner of the page, the header shows the logo of the website.

  ![logo](https://github.com/jyotiyadav2508/Game-Rock-Scissors-Paper/blob/main/screenshots/logo.png)

- __Heading and Image__

  - This header cleary tells the name of the game which user is going to play.
  - The image shows the name of all three icons, with which we are going to play the game and also describes the rules of the game "Rock, scissors, Paper".
  - This game is played between user and computer.

   ![Image of Home page ](https://github.com/jyotiyadav2508/Game-Rock-Scissors-Paper/blob/main/screenshots/main-image.png)

- __Nav Button__ 

  - Featured at the end of the page is the Start-Game Button, which allows the user to easily navigate to the game page.  

   ![Start button](https://github.com/jyotiyadav2508/Game-Rock-Scissors-Paper/blob/main/screenshots/start-game-button.png)

- __The Game Section__  

  - It starts with the name of the game: Rock, Scissors, Paper.

   ![heading](https://github.com/jyotiyadav2508/Game-Rock-Scissors-Paper/blob/main/screenshots/game-heading.png)

- __Available Selections__

  - It shows the number of selections currently available.

   ![Selections Left](https://github.com/jyotiyadav2508/Game-Rock-Scissors-Paper/blob/main/screenshots/current-selections.png)

- __The Game Options__  

  - The Game options section includes the following:
    - clear instruction,
    - choice of options to choose from
    - these options are intractive icons that the user can click to make their choice and play the game.

   ![ Game Options](https://github.com/jyotiyadav2508/Game-Rock-Scissors-Paper/blob/main/screenshots/game-icons.png)

 - __Choice Display Section__ 

   - When user clicks an option, the image relating to their choice is shown on the user-choice area.
   - The Java Script code chooses a random option for the computer player and displays the image relating to computer's choice on computer-choice  area.

    ![Choice display](https://github.com/jyotiyadav2508/Game-Rock-Scissors-Paper/blob/main/screenshots/choice-display.png) 

 - __The Result__ 

   - After each user selection, Java Script generates computer choice randomly and determines and displays its specific selection result. 
   - The score is updated for either the user or the computer, depending on the selection result.
   - After 5 selections, game winner is announced.
   - Once the game is over, user can either restart the game by clicking the restart button or exit the game page by clicking exit button. The Exit button navigates the user to home page.

   ![Result display](https://github.com/jyotiyadav2508/Game-Rock-Scissors-Paper/blob/main/screenshots/selection-result.png) 

   ![Score display](https://github.com/jyotiyadav2508/Game-Rock-Scissors-Paper/blob/main/screenshots/user-computer-score.png)

   ![Display Winner](https://github.com/jyotiyadav2508/Game-Rock-Scissors-Paper/blob/main/screenshots/game-winner.png)

 - __Restart and Exit button__

   - After the game is over or in the middle of the game, the user can restart the game by clicking restart button.
   - Exit button navigates the user to the home page. 

   ![Buttons](https://github.com/jyotiyadav2508/Game-Rock-Scissors-Paper/blob/main/screenshots/restart-exit-buttons.png)

## Technologies Used

### Languages Used

  - HTML, CSS and JavaScript were used to creat this website. 

### Frameworks and Programms Used

  - Balsamiq - Used to create wireframes.
  - Git - For version control.
  - Github - To save and store the files for the website.
  - Dev Tools - To troubleshoot and test features, solve issues with responsiveness and styling.
  - [Am I Responsive?](https://ui.dev/amiresponsive) To show the website image on arange of devices.

## Testing  

I tested the following:
  - both the pages of the website on different browsers: Chrome, Edge, Safari.
  - when a nav element is clicked, it provides the navigation link to the respective page. 
  - the responsiveness of the website on different screen sizes (Mobile S-320px, Mobile M-375px, Mobile L-425px, Tablet-768px, Laptop-1024px) using Devtools sevice toolbar. The different CSS propoerties for font, hover, image size and buttons work as expected.
  - the logic of Java Script code like user's click event, generates randomly computer choice, display user and computer choice in their respective area, selection result, score increment as per result, selections left and winner is announced as expected. 

### Validator Testing

 - __HTML__

   - No error was returned when passing through the official for index.html [W3C validator](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fjyotiyadav2508.github.io%2FGame-Rock-Scissors-Paper%2Findex.html)
   - No error was returned when passing through the official for game.html [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjyotiyadav2508.github.io%2FGame-Rock-Scissors-Paper%2Fgame.html)

 - __CSS__
 
   - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjyotiyadav2508.github.io%2FGame-Rock-Scissors-Paper%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

 - __JavaScript__

   - No errors were found when passing through the official Jshint validator [JSHint Validator](https://jshint.com/) 
     - The following metrics were returned:
     - There are 8 functions in this file.
     - Function with the largest signature takes 2 arguments, while the median is 1.
     - Largest function has 12 statements in it, while the median is 4.5.
     - The most complex function has a cyclomatic complexity value of 8 while the median is 3.

 - __Accessibility__
 
     - Lighthouse test result for mobile [See here](https://github.com/jyotiyadav2508/Game-Rock-Scissors-Paper/blob/main/screenshots/lighthouse-testing-mobile.png)

     - Lighthouse test result for desktop [See here](https://github.com/jyotiyadav2508/Game-Rock-Scissors-Paper/blob/main/screenshots/lighthouse-testing-desktop.png)  

## Bugs

### Fixed bugs

  - User Choice was not working while clicking on the text instead of icon. It is fixed by replacing "event.Target.id;" with "event.currentTarget.id;".
  - While checking game.html with W3C validator,following errors were shown :
    - "Element p is not allowed as child of element i" for user choice icons - Fix by replacing p element by span element.
    -  The element a must not appear as descendent of button element - Fix by removing button element and giving a class name direct in a tag.
 

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the side menu, select pages under Code and automation, select the main Branch, then click to save button.
  - Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

  The live link can be found here - https://jyotiyadav2508.github.io/Game-Rock-Scissors-Paper/

## Credits 

  - The icons in game area were taken from https://fontawesome.com/icons.
  - The image used on home page was taken from https://favpng.com.
