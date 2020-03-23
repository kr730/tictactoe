
export class Cell {

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