let prompt
try {
    prompt = require('prompt-sync')();
} catch (e) {
    console.log("prompt-sync is not installed. Run `npm i prompt-sync` to download it.")
    process.exit(1)
}

let userScore = 0
let computerScore = 0

while(userScore < 100 && computerScore < 100){
    console.log('--------------------------------------');
    let userMove = prompt(`Press enter to roll your dice `)
    let userRoll = Math.ceil(Math.random() * 5)
    let computerRoll = Math.ceil(Math.random() * 5)

    userScore += userRoll
    computerScore += computerRoll
    console.log(`You rolled a ${userRoll}`);
    console.log(`The computer rolled a ${computerRoll}`);

    if(userScore >= 100 && computerScore < 100) {
        console.log(`\x1b[32m%s\x1b[0m`,`Your You are the first to 100! You win :)`)
    } else if (userScore < 100 && computerScore >= 100 ){
        console.log(`\x1b[31m%s\x1b[0m`,`Your The computer is the first to 100! You lose :(`)
    }

    else if (userScore === computerScore) {
        console.log(`\x1b[33m%s\x1b[0m`,`Your position on the board is square ${userScore}`)
        console.log(`\x1b[33m%s\x1b[0m`,`The computers' position on the board is square ${computerScore}`)
    }   else if (userScore > computerScore) {
        console.log(`\x1b[32m%s\x1b[0m`,`Your position on the board is square ${userScore}`)
        console.log(`\x1b[31m%s\x1b[0m`,`The computers' position on the board is square ${computerScore}`)
    }   else {
        console.log(`\x1b[31m%s\x1b[0m`,`Your position on the board is square ${userScore}`)
        console.log(`\x1b[32m%s\x1b[0m`,`The computers' position on the board is square ${computerScore}`)
    }
// USER LADDERS
    if (userScore === 5) {
        userScore += 53
        console.log(`\x1b[32m%s\x1b[0m`,`You climbed a ladder! Move up to square ${userScore}`);
    } else if (userScore === 14) {
        userScore += 35
        console.log(`\x1b[32m%s\x1b[0m`,`You climbed a ladder! Move up to square ${userScore}`);
    } else if (userScore === 42) {
        userScore += 18
        console.log(`\x1b[32m%s\x1b[0m`,`You climbed a ladder! Move up to square ${userScore}`);
    } else if (userScore === 53) {
        userScore += 19
        console.log(`\x1b[32m%s\x1b[0m`,`You climbed a ladder! Move up to square ${userScore}`);
    } else if (userScore === 64) {
        userScore += 19
        console.log(`\x1b[32m%s\x1b[0m`,`You climbed a ladder! Move up to square ${userScore}`);
    } else if (userScore === 75) {
        userScore += 19
        console.log(`\x1b[32m%s\x1b[0m`,`You climbed a ladder! Move up to square ${userScore}`);
    } 
//COMPUTER LADDERS
    if (computerScore === 5) {
        computerScore += 53
        console.log(`\x1b[32m%s\x1b[0m`,`The computer climbed a ladder! Move up to square ${computerScore}`);
    } else if (computerScore === 14) {
        computerScore += 35
        console.log(`\x1b[32m%s\x1b[0m`,`The computer climbed a ladder! Move up to square ${computerScore}`);
    } else if (computerScore === 42) {
        computerScore += 18
        console.log(`\x1b[32m%s\x1b[0m`,`The computer climbed a ladder! Move up to square ${computerScore}`);
    } else if (computerScore === 53) {
        computerScore += 19
        console.log(`\x1b[32m%s\x1b[0m`,`The computer climbed a ladder! Move up to square ${computerScore}`);
    } else if (computerScore === 64) {
        computerScore += 19
        console.log(`\x1b[32m%s\x1b[0m`,`The computer climbed a ladder! Move up to square ${computerScore}`);
    } else if (computerScore === 75) {
        computerScore += 19
        console.log(`\x1b[32m%s\x1b[0m`,`The computer climbed a ladder! Move up to square ${computerScore}`);
    }

//USER SNAKES

if (userScore === 38) {
    userScore -= 18
    console.log(`\x1b[31m%s\x1b[0m`,`You hit a snake! You slide back down to square ${userScore}`);
} else if (userScore === 45) {
    userScore -= 38
    console.log(`\x1b[31m%s\x1b[0m`,`You hit a snake! You slide back down to square ${userScore}`);
} else if (userScore === 51) {
    userScore -= 41
    console.log(`\x1b[31m%s\x1b[0m`,`You hit a snake! You slide back down to square ${userScore}`);
} else if (userScore === 76) {
    userScore -= 22
    console.log(`\x1b[31m%s\x1b[0m`,`You hit a snake! You slide back down to square ${userScore}`);
} else if (userScore === 91) {
    userScore -= 18
    console.log(`\x1b[31m%s\x1b[0m`,`You hit a snake! You slide back down to square ${userScore}`);
} else if (userScore === 97) {
    userScore -= 37
    console.log(`\x1b[31m%s\x1b[0m`,`You hit a snake! You slide back down to square ${userScore}`);
} 

//COMPUTER SNAKE
if (computerScore === 38) {
    computerScore -= 18
    console.log(`\x1b[31m%s\x1b[0m`,`The computer hit a snake! The computer slides back down to square ${computerScore}`);
} else if (computerScore === 45) {
    computerScore -= 38
    console.log(`\x1b[31m%s\x1b[0m`,`The computer hit a snake! The computer slides back down to square ${computerScore}`);
} else if (computerScore === 51) {
    computerScore -= 41
    console.log(`\x1b[31m%s\x1b[0m`,`The computer hit a snake! The computer slides back down to square ${computerScore}`);
} else if (computerScore === 76) {
    computerScore -= 22
    console.log(`\x1b[31m%s\x1b[0m`,`The computer hit a snake! The computer slides back down to square ${computerScore}`);
} else if (computerScore === 91) {
    computerScore -= 18
    console.log(`\x1b[31m%s\x1b[0m`,`The computer hit a snake! The computer slides back down to square ${computerScore}`);
} else if (computerScore === 97) {
    computerScore -= 37
    console.log(`\x1b[31m%s\x1b[0m`,`The computer hit a snake! The computer slides back down to square ${computerScore}`);
} 

}