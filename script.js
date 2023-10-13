
// VARIABLES
let points = 0 //works
let messageBoard = document.querySelector(".messageBoard")
let gameOver = document.querySelector(".game-over")
let pointTag = document.getElementById("points")
let levelOneButton = document.getElementById("levelOneButton"); //works
let questionDiv = document.getElementsByClassName("question")[0] //works
let choice1li = document.getElementById("choice1Tag") //works
let choice2li = document.getElementById("choice2Tag") //works
let choice3li = document.getElementById("choice3Tag") //does not work
let currentquestion = 0
let levelOneQuestions = [
    {
        question: `Which "friends" character had a twin sister?`,
        answers: ["Joey", "Monica", "Phoebe"],
        correctAnswer: "Phoebe",
    },
    {
      question: `Which "friends" character played the renouned Dr. Drake Ramoray on "Days of Our Lives" soap opera?`,
      answers: ["Chandler", "Gunther", "Joey"],
      correctAnswer: "Joey",
    },
    {
      question: "How many times did Ross get divorced?",
      answers: ["Four", "Two", "Three"],
      correctAnswer: "Three",
    },
    {
      question: "Who pees on Monica after she gets stung by a jellyfish?",
      answers: ["Chandler", "Joey", "Rachel"],
      correctAnswer: "Chandler",
    },
    {
      question: "Janice plays the girlfriend of which character?",
      answers: ["Ross", "Chandler", "Gunther"],
      correctAnswer: "Chandler",
    },
    {
        question: "What was Phoebe's hit single entitled?",
        answers: ["Smelly Dog", "Stinky Cat", "Smelly Cat"],
        correctAnswer: "Smelly Cat",
      },
      {
        question: "What caused the fire at Rachel and Phoebe's apartment?",
        answers: ["Phoebe's candle", "Monica's burning caserole", "Rachel's hair straightener"],
        correctAnswer: "Rachel's hair straightener",
      },
      {
        question: `Which character famously said, "We were on a BREAK"?`,
        answers: ["Ross", "Rachel", "Phoebe"],
        correctAnswer: "Ross",
      },
      {
        question: "Ross & Rachel have their very first date where?",
        answers: ["The Planetarium", "At Ross's house", "Central Perk Cafe"],
        correctAnswer: "The Planetarium",
      },
      {
        question: "Who was the head barista at Central Perk Cafe?",
        answers: ["Richard", "Janice", "Gunther"],
        correctAnswer: "Gunther",
      },
      {
        question: "Rachel's first job after moving in with Monica is...?",
        answers: ["A designer for Louis V in Paris", "A barista at Central Perk Cafe", "A sales associate at Bloomingdales"],
        correctAnswer: "A barista at Central Perk Cafe",
      },
      {
        question: "Which two characters drunkenly got married in Vegas (by accident)?",
        answers: ["Joey & Phoebe", "Ross & Rachel", "Chandler & Monica"],
        correctAnswer: "Ross & Rachel",
      },
      {
        question: "What is the name of Monica's childhood eye doctor, whom she eventually fell in love with?",
        answers: ["Chip", "Bradford", "Richard"],
        correctAnswer: "Richard",
      },
      {
        question: `What city is "Friends" set in?`,
        answers: ["New York City", "LA", "Chicago"],
        correctAnswer: "New York City",
      },
      {
        question: "Why did Ross' first marriage end?",
        answers: ["His wife falls in love with another man", "He finds out his wife is unexpectedly pregnant", "He finds out his wife is a lesbian"],
        correctAnswer: "He finds out his wife is a lesbian",
      },
      {
        question: "Ross and his first wife share a child by the name of?",
        answers: ["A son named Ben", "A daughter named Emily", "A son named Ethan"],
        correctAnswer: "A son named Ben",
      },
      {
        question: `Which two "Friends" characters fall in love and eventually get married?`,
        answers: ["Joey & Rachel", "Chandler & Monica", "Chandler & Phoebe"],
        correctAnswer: "Chandler & Monica",
      },
      {
        question: "Phoebe becomes a surrogate mother of triplets for who?",
        answers: ["Her brother & his wife", "Ross & Rachel", "Chandler & Monica"],
        correctAnswer: "Her brother & his wife",
      },
      {
        question: "Who is the first to find out about Chandler & Monica?",
        answers: ["Gunther", "Rachel", "Joey"],
        correctAnswer: "Joey",
      },
      {
        question: "What is Chandler's surname?",
        answers: ["Ghalleger", "Bing", "Rialto"],
        correctAnswer: "Bing",
      }

  ]; //array works
  

// EVENT LISTENERS
levelOneButton.addEventListener("click", playLevelOne)


// FUNCTIONS
function openNav() {
    document.getElementById("menuBar").style.width = "250px";
    document.getElementById("mainMenu").style.marginLeft = "250px";
}
  
function closeNav() {
    document.getElementById("menuBar").style.width = "0";
    document.getElementById("mainMenu").style.marginLeft= "0";
};

function playLevelOne(){ 
    // get rid of the game over message so we can restart
    gameOver.innerText = ''
    // for each level one question
    clearQuestions()
    displayQuestions(levelOneQuestions[currentquestion])
    // end the round
    // scoreTheGame()
}

function clearQuestions() {
    questionDiv.innerHTML = ""
    choice1li.innerHTML = ""
    choice2li.innerHTML = ""
    choice3li.innerHTML = ""

    choice1li.classList.remove('active-question')
    choice2li.classList.remove('active-question')
    choice3li.classList.remove('active-question')
}

function selectChoice(i){
    // check if answer is right or wrong
    // if THIS choice is the same as the right answer stored in THIS question object
    let questionObject = levelOneQuestions[currentquestion]
    if(currentquestion === levelOneQuestions.length - 1) {
        endGame()
        return
    }
    if( questionObject.answers[i] === questionObject.correctAnswer){
    // alert("Correct!");
    messageBoard.innerText = "YES!"


    // adjust points for the round ADD ONE POINT
    points += 1
    if (points === 0 || points === 1){
        pointTag.innerHTML = `${points} point`
    } else {
        pointTag.innerHTML = `${points} points`
    }

    
    } else {
    // alert("Wrong Answer");   
    messageBoard.innerText = "X" 
    }
    currentquestion ++
    playLevelOne() 
}


function displayQuestions(questionObject){
    levelOneButton.style.display = "none"
    // display the question and answers
    // Add element to the dom
    if(!questionObject) {
        return
    }
    console.log(currentquestion)
    let questionTag = document.createElement("h2")
    const node = document.createTextNode(questionObject.question)
    questionTag.appendChild(node)
    questionDiv.appendChild(questionTag)
    
    const choiceOneText = document.createTextNode(questionObject.answers[0]) 
    choice1li.appendChild(choiceOneText) // CHECK THE NAME!

    // add event listener to the element
   
    
    const choiceTwoText = document.createTextNode(questionObject.answers[1])
    choice2li.appendChild(choiceTwoText)
    
    
    // add event listener to the element
    
    
    
    
    const choiceThreeText = document.createTextNode(questionObject.answers[2])
    choice3li.appendChild(choiceThreeText)
    
    // add class that'll only display when the question is displayed

    choice1li.classList.add('active-question')
    choice2li.classList.add('active-question')
    choice3li.classList.add('active-question')

    // add event listener to the element
}

choice1li.addEventListener("click",() => selectChoice(0))
choice2li.addEventListener("click", () => selectChoice(1))
choice3li.addEventListener("click" ,() => selectChoice(2)) 

function endGame(){
    // alert("GAME OVER BABES!")
    // remove the write or wrong answer message
    messageBoard.innerText = ''
    gameOver.innerText = `Game Over Babes \n ${points} points`
    // change the message board width so it'll be big enough
    gameOver.style.width = '100%'
    // reset question counter so game can restart
    currentquestion = 0
    // let the start button say replay at the end of the game instead of let's play
    levelOneButton.innerText = "Replay?"
    // Gotta undo the style = none but block was acting up so I did this instead
    levelOneButton.style.display = ''
    // take the questions off the screen cause the game is over!
    clearQuestions()
}


