import { Person, PersonTick } from '../src/Person';
import { Simulator } from '../src/Simulator';

export class Renderer {

    draw (simulator: Simulator, eve: Person) {
        const app = document.getElementById("app");
        const root = document.createElement("ul");
        let li = document.createElement("li");
        li.textContent = "Eve";
        root.appendChild(li);
        this.drawKids(simulator, li, eve.children);
        app?.append(root);
    }

    drawKids (simulator: Simulator, el: HTMLLIElement, kids: Array<Person>) {
        let ul = document.createElement("ul");
        el.appendChild(ul);
        for (let kid of kids) {
            let li = document.createElement("li");
            li.textContent = kid.color.toString() + " " + kid.sex.toString() + ", age " + kid.age(simulator.year);
            ul.appendChild(li);
            // this.drawKids(simulator, li, kid.children);

        }
    }
}