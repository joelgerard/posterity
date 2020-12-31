import * as mortality from "./data/mortality.json";
import { Person, Sex } from "./Person"

export class Config {

    // Probability somebody is born female.
    femaleBirthProb: number = 0.51;

    // What is the probability this person will die this year.
    // From https://www.ssa.gov/oact/STATS/table4c6.html
    deathProbability (year: number, person: Person) {
        let sex =  person.sex.toString();
        return mortality[sex][person.age(year)]["Probability"];
    }

    // Probability of becoming pregant.
    birthProbability (year: number, person: Person) {
        return 0.5;
    }
  
    constructor() {
    }


  }