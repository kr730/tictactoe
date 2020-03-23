import {Cell} from './cell.js';

export class Board {
    constructor(){
        this.cells = [
            [new Cell(), new Cell(), new Cell()],
            [new Cell(), new Cell(), new Cell()],
            [new Cell(), new Cell(), new Cell()]
        ]
    }
}