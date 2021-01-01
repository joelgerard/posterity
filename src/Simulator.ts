import { Person, PersonTick, Sex, Color } from '../src/Person';
import { Renderer } from '../src/Renderer';
import { IRandom } from '../src/IRandom';

export class Simulator {
    year: number=0;
    people: Array<Person> = [];

    tick (num: Number = 1) {
        for (let i = 0; i < num; i++) {
            this.year++;
            let babies =  new Array<Person>();
            for (let person of this.people) {
                let tickResult = person.tick(this.year);
                if (tickResult == null)
                {
                    console.warn("Tick on dead person.");
                    continue;
                }
                if (tickResult.baby != null) {
                    babies.push(tickResult.baby);
                }
                if (tickResult.died) {
                    this.people.splice(this.people.indexOf(person),1);
                }
            }
            this.people = this.people.concat(babies);
        }
    } 

    init () {
        let eve = new Person(Sex.Female, this.year, Color.Black);
        this.people.push(eve);
    }

    run () {
        for(var i=0; i < 180; i++){
            console.log("Year " + i);
            this.tick();
        }

        let renderer = new Renderer();
        renderer.draw(this, this.people[0]);

    }
}



