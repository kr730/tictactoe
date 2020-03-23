class Cell {

    constructor() {
        this.sign = null;
    }

    update(sign) {
        if (this.sign !== null){
            throw new Error('this cell is not empty');
        }
        this.sign = sign;
    }
}

class Player {
    constructor(sign) {
        this.sign = sign;
    }

    click(cell) {
        cell.update(this.sign);
    }
}

export class Game {
    constructor() {
        this.cross = new Player('x');
        this.zero = new Player('o');
        this.turns = 0;
        this.winner = null;
        this.cells = [
            [new Cell(), new Cell(), new Cell()],
            [new Cell(), new Cell(), new Cell()],
            [new Cell(), new Cell(), new Cell()]
        ]
    }

    makeTurn(x, y) {
        const cell = this.cells[x][y];
        const player = this.turns % 2 ? this.cross : this.zero;

        console.log(`cell: (${x}, ${y}), player: ${player.sign}`);
        player.click(cell);
        if(this.isWinner(player)){
            console.log(`player ${player.sign} won!`);
            this.winner = player;
        }

        this.turns++;
    }

    isWinner(currentPlayer) {
        let cell = this.cells;
        let counthorizontal = 0;
        let countvertical = 0;
        let diagonalMain = 0;
        let diagonalSide = 0;
        for(let i = 0; i < cell.length; i++){
            for(let j = 0; j < cell[i].length; j++){
                if(cell[i][j].sign == currentPlayer.sign){
                    counthorizontal++;
                }
                if(cell[j][i].sign == currentPlayer.sign){
                    countvertical++;
                }
            }
            counthorizontal = 0;
            countvertical = 0;
            if (cell[i][i].sign == currentPlayer.sign) {
                diagonalMain++;
            }
            if (cell[i][cell.length-1-i].sign == currentPlayer.sign) {
                diagonalSide++;
            }
        }

        return counthorizontal == cell.length ||
            countvertical == cell.length ||
            diagonalMain == cell.length ||
            diagonalSide == cell.length;
    }
}



console.log('game initialized');
const game = new Game();


function click(el, x, y) {
    console.log(el, x, y);
    game.makeTurn(x, y);
    el.innerText = game.cells[x][y].sign;

    if (game.winner) alert(`player ${game.winner.sign} won!`);

}

window.click = click;