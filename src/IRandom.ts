export interface IRandom {
    random(): number;
}

export class Random implements IRandom {
    random () {
        return Math.random();
    }
}

export class Constant implements IRandom {
    value: number;

    constructor(value: number)
    {
        this.value = value;
    }
    
    random () {
        return this.value;
    }

}