import { Person, PersonTick, Sex, Color } from '../src/Person';
import { Renderer } from '../src/Renderer';
import { IRandom } from '../src/IRandom';

export class Simulator {
    year: number=0;
    people: Array<Person> = [];

    tick () {
        this.year++;
        for (let person of this.people) {
            let tickResult = person.tick(this.year);
            if (tickResult.baby != null) {
                this.people.push(tickResult.baby);
            }
            if (tickResult.died) {
                this.people.splice(this.people.indexOf(person),1);
            }
        }
    } 

    run () {
        let eve = new Person(Sex.Female, this.year, Color.Black);
        this.people.push(eve);

        for(var i=0; i < 100; i++){
            console.log("Year " + i);
            this.tick();
        }

        let renderer = new Renderer();
        renderer.draw(this.people[0]);

    }
}



