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

function getComputerChoice() {
    const choice = ['p', 'r', 'w', 's', 'f'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choice[randomNumber];

}

function win(userChoice, computerChoice) {
    userScore++;
    console.log("WON")
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = bringWord(userChoice) + " beats " + bringWord(computerChoice) + ". You win! 😍😍 "
    userChoice_div.classList.add('green-glow')
    setTimeout(() => { userChoice_div.classList.remove('green-glow') }, 400);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    console.log("LOSE")
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = bringWord(computerChoice) + " beats " + bringWord(userChoice) + ". Sorry! You Lose 😅🤐 "
    userChoice_div.classList.add('red-glow')
    setTimeout(() => {
        userChoice_div.classList.remove('red-glow')
    }, 400);
}

function draw(userChoice, computerChoice) {

    console.log("Its draw")
    const userChoice_div = document.getElementById(userChoice);
    result_div.innerHTML = bringWord(computerChoice) + " matches " + bringWord(userChoice) + ". Opps! Its draw 👻👻 "
    userChoice_div.classList.add('yellow-glow')
    setTimeout(() => {
        userChoice_div.classList.remove('yellow-glow')
    }, 400);
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

function main() {

    rock_div.addEventListener('click', () => {
        game('r');
    })
    scissor_div.addEventListener('click', () => {
        game('s');
    })
    paper_div.addEventListener('click', () => {
        game('p');
    })
    water_div.addEventListener('click', () => {
        game('w');
    })
    fire_div.addEventListener('click', () => {
        game('f')
    })


}

main();