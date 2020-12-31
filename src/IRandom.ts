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

export class Randomizer implements IRandom {
    static instance: Randomizer | null = null;
    r: IRandom = new Random();

    static getInstance() {
        if (this.instance == null) {
            this.instance = new Randomizer();
        }
        return this.instance;
    }

    random() {
        return this.r.random();
    }

}