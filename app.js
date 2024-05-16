let userScore = 0 //your score
let compScore = 0   // computer score


const choices = document.querySelectorAll(".choice");

const msgBox = document.querySelector("#msg"); //massage box
const user = document.querySelector("#your-score");
const comp = document.querySelector("#computer-score");


const playGame = (UserChoice)=>{
    console.log("your choice is", UserChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice is", compChoice);
    if(UserChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(UserChoice === "rock"){
            userWin = compChoice === "paper"? false : true;
        }
        else if(UserChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock"? false : true;
        }
        showWin(userWin);
        score(userWin);
    }

}

const showWin = (userWin)=>{
    if(userWin){
       console.log("You Won!")
        msgBox.innerHTML = "You Won!";
        msgBox.style.backgroundColor = "Green"
    }
    else{
        console.log("Computer Won!")
        msgBox.innerHTML = "You Lost!"
        msgBox.style.backgroundColor = "Red"
    }
}


const score =(userWin)=>{
    if(userWin){
        userScore++;
        user.innerHTML = userScore
        console.log(userScore)
    }
    else{
        compScore++;
        comp.innerHTML = compScore
        console.log(compScore)
    }
}

//Draw
const drawGame = ()=>{  
    console.log("Game Draw")
    msgBox.innerText = "It's a Draw!"
    msgBox.style.backgroundColor = "pink"
    
}
const genCompChoice = ()=>{
    let array = ["rock", "scissors", "paper"]
    let arrayId = Math.floor(Math.random() * 3)
    return array[arrayId]
}

choices.forEach((choice)=>{
    console.log(choice)
    let UserChoice = choice.getAttribute("id")
    choice.addEventListener("click",()=>{
        console.log("choice is", UserChoice );
        playGame(UserChoice)
    })
})