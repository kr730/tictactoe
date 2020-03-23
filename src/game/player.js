
export class Player {
    constructor(sign) {
        this.sign = sign;
    }

    click(cell) {
        cell.update(this.sign);
    }
}