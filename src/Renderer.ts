import { Person, PersonTick } from '../src/Person';

export class Renderer {

    draw (eve: Person) {
        const app = document.getElementById("app");
        const root = document.createElement("ul");
        let li = document.createElement("li");
        li.textContent = "Eve";
        root.appendChild(li);
        this.drawKids(li, eve.children);
        app?.append(root);
    }

    drawKids (el: HTMLLIElement, kids: Array<Person>) {
        let ul = document.createElement("ul");
        el.appendChild(ul);
        for (let kid of kids) {
            let li = document.createElement("li");
            li.textContent = kid.color.toString() + " " + kid.sex.toString() + ", age " + kid.deathAge();
            ul.appendChild(li);
            this.drawKids(li, kid.children);

        }
    }
}