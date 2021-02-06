let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score')
const computerScore_span = document.getElementById('comp-score')
const scoreBoard_div = document.getElementsByClassName('score-board')
const result_div = document.querySelector('.result > p')
const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissor_div = document.getElementById('s')
const water_div = document.getElementById('w')
const fire_div = document.getElementById('f')
const actionmsg = document.getElementById('action-msg');


function getComputerChoice() {
    const choice = ['p', 'r', 'w', 's', 'f'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choice[randomNumber];

}
let count = 0;

function win(userChoice, computerChoice) {


    userScore++;
    console.log("WON")
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = "Your " + bringWord(userChoice) + " beats Computer's " + bringWord(computerChoice) + ". You earn a point 😍😍 "
    userChoice_div.classList.add('green-glow')
    setTimeout(() => { userChoice_div.classList.remove('green-glow') }, 400);

    if (count >= 10) {
        console.log(count);
        if (userScore > computerScore) {
            result_div.innerHTML = "Congratulations 😍😍🎉🎉 You Won!!!";
            console.log("Congratulations");

        } else if (userScore == computerScore) {
            result_div.innerHTML = "Opps Its a draw 🤐🤐🥱🥱!!!";


        } else if (userScore < computerScore) {
            result_div.innerHTML = "UFFFFF NOOB You Loose 😒🤦‍♂️!!!";
            console.log("You Loose!!");

        }
    }
}

function lose(userChoice, computerChoice) {


    computerScore++;
    console.log("LOSE")
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = "Computer's " + bringWord(computerChoice) + " beats your " + bringWord(userChoice) + ".You Lose a point 😅🤐 "
    userChoice_div.classList.add('red-glow')
    setTimeout(() => {
        userChoice_div.classList.remove('red-glow')
    }, 400);

    if (count >= 10) {
        console.log(count);
        if (userScore > computerScore) {
            result_div.innerHTML = "Congratulations 😍😍🎉🎉 You Won!!!";
            console.log("Congratulations");

        } else if (userScore == computerScore) {
            result_div.innerHTML = "Opps Its a draw 🤐🤐🥱🥱!!!";



        } else if (userScore < computerScore) {

            result_div.innerHTML = "UFFFFF NOOB You Loose 😒🤦‍♂️!!!";

            console.log("You Loose!!");
        }
    }
}

function draw(userChoice, computerChoice) {

    console.log(count);
    console.log("Its draw")
    const userChoice_div = document.getElementById(userChoice);
    result_div.innerHTML = "Your " + bringWord(computerChoice) + " matches Computer's " + bringWord(userChoice) + ". Its a draw 👻👻 "
    userChoice_div.classList.add('yellow-glow')
    setTimeout(() => {
        userChoice_div.classList.remove('yellow-glow')
    }, 400);

    if (count >= 10) {
        console.log(count);
        if (userScore > computerScore) {
            result_div.innerHTML = "Congratulations 😍😍🎉🎉 You Won!!!";
            console.log("Congratulations");

        } else if (userScore == computerScore) {

            result_div.innerHTML = "Opps Its a draw 🤐🤐🥱🥱!!!";
            console.log("You Loose!!");

        } else if (userScore < computerScore) {
            result_div.innerHTML = "UFFFFF NOOB You Loose 😒🤦‍♂️!!!";

        }
    }
}

function bringWord(Choice) {
    let c = '';
    if (Choice == 'r') {
        c = 'Rock 🧱'
    } else if (Choice == 'p') {
        c = 'Paper 📜'
    } else if (Choice == 's') {
        c = `Scissor ✂`
    } else if (Choice == 'w') {
        c = 'Water 💧'
    } else if (Choice == 'f') {
        c = 'Fire 🔥'
    }


    return c;
}

function game(userChoice) {

    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'rf':
        case 'pr':
        case 'wr':
        case 'fs':
        case 'fp':
        case 'wf':
        case 'sp':
        case 'pw':
        case 'sw':

            win(userChoice, computerChoice);
            break;
        case 'sr':
        case 'fr':
        case 'rp':
        case 'rw':
        case 'sf':
        case 'pf':
        case 'fw':
        case 'ps':
        case 'wp':
        case 'ws':
            lose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
        case 'ww':
        case 'ff':
            draw(userChoice, computerChoice);
            break;
    }

}

function serviceClicked(id) {
    if (count == 10) {
        winnercall(id);
        actionmsg.innerHTML = `<button style="padding:10px; border:2px solid #F2A413;font-weight:bold; font-size:20px;margin-top:-10px; border-radius:10px;background:#BF213E;color:#389BA6;"onclick = "load()">Play Again</button>`;
        return;
    }
    count++;

    console.log("Inside onclick ");
    game(id);

}

function load() {
    window.location.reload(true);
}

console.log(count);





function winnercall(id) {
    console.log("Winner");
    document.getElementById(id).onclick = null;

}