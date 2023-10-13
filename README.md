# PROJECT-1
GAME DESCRIPTION -- "FRIEND or FOE" Friends TV Show Trivia GAME

This is a game of "Firned or Foe." The key objectives is to test user knowledge of a famous television show by use of a simple point system.
There is no set minimum point system. Fore every question answered correctly, a message that reads "Yes" will appear. For every question that is marked incorrectly, a message that reads "X" will appear. 

The game's point system is designed this way to allow user(s) numerous attempts in an effort to reach their desired score. 

At the home page, user is prompted to play the game. There are a total of 20 questions. For each question are three answer choice to selct from. The side bar is created to keep log of user's points as they continue throgh the game and to respond at the end of the game their total amount of points. 

  
  
  
  TECHNOLOGY USED

  I used HTML to implement my headings, ids, and classes for the heart the game's content. To select the "Let's Play" prompt, I utilized a html button. My home page's heading is also created in HTML. 

  CSS was my primary source of styling in terms of presenation and first impressions. Following the user's click on the "Let's Play" button is the first question which will lead user to question and answer choices. The styling of each question and its answer choices happened mainly in the css. Color of text, background of text, border, padding, etc was the heart of the answer choice presentation.

  Jaascript operates as the source of functionality and interactivity for the majority of the game. By use of the DOM, I was able to create a function that would allow the user to click on the "Let's Play" button and be directed to the first question. I was also able to create a function that would allow the user to click on the answer choice and be directed to the next question.
  In conjunction with HTML, Javascript was primarily used to create the content of the game. The questions and answer choices were created in Javascript. The point system was also created in Javascript.. 
  In order to build a functioning system to list all questions, I implemented an array of object that specify the question, answer choices, and correct answer.
  Additionally, I created a forEach function that iterate through the entire array of objects and display each question and its answer choices.
  The majority of the functionality would come from creating anonymous functions to invoke the user's click, log points and maintian a running total of points, and display the correct answer.





CODING CHALLENGES

  The most challenging portio of this code was implementing the proper conditions for my nested if else statement located inside of the SelectChoice function.
  Though it has been taught in class a number of times, I still had to recall that accessing the array for this particular condiotion would require the use of the array.length minus one in order to 
  access the index number of the array accoringly.




NEXT STEPS

  There are a number of things that I would like to see happen for this game. Here are a few:
  1. Correct and asjust the menu bar so that it is completely fixated and does not bleed over into the heading's textbox.
  2. Due to lack of adequate time I was unable to create a function that nwould create a points cieling, causing the point system to stop and reset when the game has concluded. 
  3. OSomething that I would like to see implemented in this game is a cool feauture that attaches a meme to the correct answer. I think this would be a cool way to add a little more fun and user friendly interactivity with and to the game.