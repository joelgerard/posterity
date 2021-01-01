import { Config } from './Config';
import { Randomizer, Rando } from '../src/IRandom';

export class Person {
    
    sex: Sex;
    config: Config = new Config();
    children: Array<Person> = [];
    birthYear: number;
    deathYear: number = -1;
    color: Color;
  
    constructor(sex: Sex, birthYear: number, color: Color) {
      this.sex = sex;
      this.birthYear = birthYear;
      this.color = color;
    }

    birth(year: number) {
        //console.log("Eve is " + this.age(year) + " and has a birth prob of " + this.config.birthProbability(year, this));
        let age = this.age(year);
        if (this.sex == Sex.Female 
            && age > 13 && age < 45
            && Randomizer.getInstance().random(Rando.Birth) > this.config.birthProbability(year, this)
            ) {
            let sex = (Randomizer.getInstance().random(Rando.Sex) < this.config.femaleBirthProb ? Sex.Female : Sex.Male)
            let child = new Person(sex, year, this.color);
            this.children.push(child);
            return child;
        }
        return null;
    }

    die(year: number) {
        if (this.deathYear == -1 && year - this.birthYear > 80) {
            this.deathYear = year;
            return true;
        }
        return false;
    }

    tick(year: number) {
        if (this.deathYear == -1){
            return new PersonTick(this.die(year), this.birth(year));
        }
        return null;
    }

    deathAge() {
        return this.deathYear - this.birthYear;
    }

    age(year: number) {
        if (this.deathYear == -1){
            return year - this.birthYear;
        }
        return this.deathAge;
    }

  }

  export class PersonTick {
      died: Boolean = false;
      baby: Person | null;

      constructor(died: Boolean, baby: Person | null) {
          this.died = died;
          this.baby = baby;
      }
  }

  export enum Sex {
    Female = "Female",
    Male = "Male",
  }

  export enum Color {
      Black = "Black",
      White = "White"
  }