(() => {
// Players

const playerOne = (() =>{
    let sign = `x`;


    return {sign}
})()

const playerTwo = (() =>{
    let sign = `o`;
    


    return {sign}
})()



// Game

const gameBoard = (() => {
    let board = [``, ``, ``, ``, ``, ``, ``, ``, ``]

    const makeAchoice = (sign, position) => {
        board[position] = sign;

        return board;
    }

    return {board, makeAchoice}
})()

const controls = (() => {
    const boxes = document.querySelectorAll(`.box`);
    let roundOne = true;
    let roundTwo = false;
    for(let i = 0; i < boxes.length; i++) {

        boxes[i].addEventListener(`click`, ()=>{
            boxes[i].disabled = true;
            
            if(roundOne === true && roundTwo === false) {
                roundOne = false;
                roundTwo = true;

                gameBoard.makeAchoice(playerOne.sign, i);
                boxes[i].textContent = playerOne.sign

                win.check();
            } else if (roundTwo === true && roundOne === false) {
                roundOne = true;
                roundTwo = false;

                gameBoard.makeAchoice(playerTwo.sign, i);
                boxes[i].textContent = playerTwo.sign;
            
                win.check();
            }
            
        })

    }
})()

const retryBtn = (() =>{
    const btn =document.querySelector(`#retry`)

    btn.addEventListener(`click`, ()=> {
        location.reload();
    })

})()

const win = (() => {
    const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

    const check = () => {
        for(let pattern of winConditions) {
            const pos1 = gameBoard.board[pattern[0]];
            const pos2 = gameBoard.board[pattern[1]];
            const pos3 = gameBoard.board[pattern[2]];
            
            if(pos1 !== `` && pos1 === pos2 && pos2 === pos3) {
                const winContainer = document.createElement(`div`);
                const winTextContainer =document.createElement(`div`);
                const winText = document.createElement(`p`);
                const container = document.querySelector(`.container`);
                const newRetryBtn = document.createElement(`button`);

                container.appendChild(winContainer);
                winContainer.appendChild(winTextContainer);
                winTextContainer.appendChild(winText)
                winTextContainer.appendChild(newRetryBtn)
                winContainer.classList.add(`winContainer`);
                winTextContainer.classList.add(`winTextContainer`);
                winText.classList.add(`winText`);
                newRetryBtn.classList.add(`winRetryBtn`);
                newRetryBtn.textContent = `Play Again!`;
                retryBtn()

                
                if(pos1 === `x`) {
                    winText.textContent = `Player One Win!`
                } else if(pos1 === `o`) {
                    winText.textContent = `Player Two Win!`
                }
            }

        }
    }

    const retryBtn = ()=> {
        const newBtn = document.querySelector(`.winRetryBtn`)
        newBtn.addEventListener(`click`, ()=>{
            location.reload()
        })
    }

    return {winConditions, check}
})()

})()




