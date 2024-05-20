(() => {
        const gameBoard = (() => {
            let gameBoard = [[``, ``, ``], [``, ``, ``], [``, ``, ``]];

            const resetBoard = () => {
                gameBoard = [[``, ``, ``], [``, ``, ``], [``, ``, ``]];
                return gameBoard;
            }

            const setValueOnBoard = (x, z, value) => {
                gameBoard[x][z] = value;
                return gameBoard;
            }

            return {gameBoard, resetBoard, setValueOnBoard};
        })();

        const playerOne = (() => {
            const playerValue = (x) => {
                let value = x;
                return value;
            }
            return {playerValue}
        })()

        const computerSelection = (() =>{
            computerValue = (x) => {
                if(x === `x`) {
                    return value = `O`;
                } else {
                    return value = `x`;
                }
            }

            return {computerValue}
        })()
        

        

})();




 
