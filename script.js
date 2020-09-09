
// created variables
var containerDiv = document.querySelector(".m-auto")

var countDownNumbDisp = document.querySelector("#timer");

var quizContainer = document.querySelector("#disappearDiv");


var timerButton = document.querySelector("#timerStart");

var subHeadDisp = document.querySelector("#subHeadingMain");
var mainHeadDisp = document.querySelector("#headingMain")

var posiAnswer1 = document.querySelector("#answer1");
var posiAnswer2 = document.querySelector("#answer2");
var posiAnswer3 = document.querySelector("#answer3");
var posiAnswer4 = document.querySelector("#answer4");


var counter = 0;




var submissionButton = document.querySelector("submitButton");
var formSubs = document.querySelector("#forms");
var lineDisp = document.querySelector("#lineId");
var answerDisp = document.querySelector("#answerDisplay");

var userScore = document.querySelector("#scoreTracker");

var currentPage = 0;
var trackedScore = 0;


// quiz quewstions
var gameArray = [
    {
        question: "Commonly used data types DO NOT Include:",
        answer1: "strings",
        answer2: "booleans",
        answer3: "numbers",
        correctAnswer1: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within:",
        answer1: "quotes",
        answer2: "curly brackeets",
        answer3: "square brackets",
        correctAnswer2: "parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        answer1: "Numbers and strings",
        answer2: "other arrays",
        answer3: "booleans",
        correctAnswer3: "all of the above"
    },
    {
        question: "String values must be enclosed withing ____ when being assigned to variables:",
        answer1: "commas",
        answer2: "curly brackets",
        answer3: "parenthesis",
        correctAnswer4: "quotes"
    },
    
     

]
// timer info
var secondsLeft = 75;
var wrongAnswerLoss = secondsLeft - 10;

timerButton.addEventListener("click", function () {
    pageChange1(); 
    setTimer();
})

function setTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--
        countDownNumbDisp.textContent = secondsLeft
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            countDownNumbDisp.textContent = 0;
            answerDisp.textContent = "Game over, you lose";
        }
    }, 1000)
}

// High Scores calculator
function scoreTabulator() {
    scoreTab = (100) + (secondsLeft * 10)
    trackedScore = trackedScore + scoreTab
    userScore.textContent = (trackedScore)
}
// credentials for first page
function pageChange1() {
    timerButton.classList.add("hideMe");
    subHeadDisp.classList.add("hideMe");
    posiAnswer1.classList.remove("hideMe");
    posiAnswer2.classList.remove("hideMe");
    posiAnswer3.classList.remove("hideMe");
    posiAnswer4.classList.remove("hideMe");
    lineDisp.classList.remove("hideMe");
    answerDisp.classList.remove("hideMe");
    // getting info from gameArray putting it into button
    mainHeadDisp.textContent = gameArray[0]["question"];
    posiAnswer1.textContent = gameArray[0]["answer1"];
    // console.dir(posiAnswer1)
    // give it a data-correct = "no"
    posiAnswer2.textContent = gameArray[0]["answer2"];
    posiAnswer3.textContent = gameArray[0]["answer3"];
    posiAnswer4.textContent = gameArray[0]["correctAnswer1"];
}
// credentials for trasition 1
function pageChange2() {
    mainHeadDisp.textContent = gameArray[1]["question"];
    posiAnswer1.textContent = gameArray[1]["answer1"];
    posiAnswer2.textContent = gameArray[1]["answer2"];
    posiAnswer3.textContent = gameArray[1]["answer3"];
    posiAnswer4.textContent = gameArray[1]["correctAnswer2"];
}
// credentials for transition 2
function pageChange3() {
    mainHeadDisp.textContent = gameArray[2]["question"];
    posiAnswer1.textContent = gameArray[2]["answer1"];
    posiAnswer2.textContent = gameArray[2]["answer2"];
    posiAnswer3.textContent = gameArray[2]["answer3"];
    posiAnswer4.textContent = gameArray[2]["correctAnswer3"];
}
// credentials for transition 3
function pageChange4() {
    mainHeadDisp.textContent = gameArray[3]["question"];
    posiAnswer1.textContent = gameArray[3]["answer1"];
    posiAnswer2.textContent = gameArray[3]["answer2"];
    posiAnswer3.textContent = gameArray[3]["answer3"];
    posiAnswer4.textContent = gameArray[3]["correctAnswer4"];
}
// credentials for transition 4
function pageChange5() {
    answerDisp.textContent = ("Quiz Complete!");
    document.getElementById("disappearDiv").remove();
    // document.getElementById("lineId").remove();
    mainHeadDisp.classList.remove("text-center");
    mainHeadDisp.textContent = ("Complete!");
    subHeadDisp.classList.remove("text-center");
    subHeadDisp.textContent = ("Score: " + trackedScore);
    subHeadDisp.classList.remove("hideMe");
    answerDisp.classList.add("hideMe");
    formSubs.classList.remove("hideMe");
}    
document.querySelectorAll(".potentialAnswer").forEach(function(button) {
    // add an event listener to that button

    button.addEventListener('click', function() {
    // transition function
        if(button.dataset.correct==="yes"){
        counter++
        gameArray[counter]
        console.log(counter)
        
    if(counter === 1){
        pageChange2();
        scoreTabulator()
    }else if(counter === 2){
        pageChange3();
        scoreTabulator()
    }
    else if(counter===3){
        pageChange4();
        scoreTabulator()
    }
    else if(counter===4){
        pageChange5();
        scoreTabulator()
 
    }
    }else{
                secondsLeft= secondsLeft -10
            }  
        })
    
    })
    
