class Game {
    constructor(){
        this.playerOne = 'X';
        this.playerTwo = 'O';
        this.currentPlayer = null;
        this.moveCount = 0;
        this.cells = [[,,,],[,,,],[,,,]];
    }

    chosePlayer() {
        if (this.moveCount % 2) {
            this.currentPlayer = this.playerOne;
        } else {
            this.currentPlayer = this.playerTwo;
        }
        this.moveCount++;
    }

    updateClick(cell, x, y){
        if (this.cells[x][y]){
            throw new Error('Select another cell');
        }
        if (!this.cells[x][y]){
            this.chosePlayer();
            this.cells[x][y] = this.currentPlayer;
            cell.innerHTML = this.currentPlayer;
        }
        this.whoIsWinner();
    }


    whoIsWinner(){
        const fieldLength = this.cells.length;
        let horcount = 0;
        let vercount = 0;
        let mainDiagonal = 0;
        let sideDiagonal = 0;
        for(let i = 0; i < this.cells.length; i++){

            if(this.cells[i][i] == this.currentPlayer){
                mainDiagonal++
            }

            if(this.cells[i][this.cells.length - 1 - i] == this.currentPlayer){
                sideDiagonal++;
            }

            if(sideDiagonal == 3 || mainDiagonal == fieldLength){
                alert(`${this.currentPlayer} is winner`);
            }

            for(let j = 0; j < this.cells[i].length; j++){
                if(this.cells[i][j] == this.currentPlayer){
                    horcount++;
                }

                if(this.cells[j][i] == this.currentPlayer){
                    vercount++;
                }

                if(vercount == fieldLength || horcount == fieldLength){
                    alert(`${this.currentPlayer} is winner`);
                }
            }
            horcount = 0;
            vercount = 0;
        }
    }

}
let game = new Game();

window.updateClick = function(cell, x, y) {
    game.updateClick(cell, x, y);
};

