export interface IRandom {
    random(rando: Rando): number;
}

export class Random implements IRandom {
    random (rando: Rando) {
        return Math.random();
    }
}

export class Constant implements IRandom {
    defaultVal: number;
    randos: Map<Rando,number> = new Map<Rando,number>();

    constructor(defaultVal: number)
    {
        this.defaultVal = defaultVal;
    }
    
    random (rando: Rando) {
        if (this.randos.has(rando)) {
            return this.randos.get(rando)!;
        }
        return this.defaultVal;
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

    setRandomizer(r: IRandom) {
        this.r = r;
    }

    random(rando: Rando) {
        return this.r.random(rando);
    }

}

export enum Rando {
    Birth = 0,
    Death,
    Sex
}