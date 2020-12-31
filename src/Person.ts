import { Config } from './Config';
import { IRandom, Random } from '../src/IRandom';

export class Person {
    
    sex: Sex;
    config: Config = new Config();
    children: Array<Person> = [];
    birthYear: number;
    deathYear: number = 0;
    color: Color;
    random: IRandom = new Random();
  
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
            && this.random.random() > this.config.birthProbability(year, this)
            ) {
            let sex = (this.random.random() < this.config.femaleBirthProb ? Sex.Female : Sex.Male)
            let child = new Person(sex, year, this.color);
            this.children.push(child);
            return child;
        }
        return null;
    }

    die(year: number) {
        if (year - this.birthYear > 80) {
            this.deathYear = year;
            return true;
        }
        return false;
    }

    tick(year: number) {
        return new PersonTick(this.die(year), this.birth(year));
    }

    deathAge() {
        return this.deathYear - this.birthYear;
    }

    age(year: number) {
        return year - this.birthYear;
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