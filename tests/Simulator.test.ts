import { expect } from 'chai';
import { Person } from '../src/Person';
import { Sex } from '../src/Person';
import { Color } from '../src/Person';
import { Constant, Randomizer, Rando } from '../src/IRandom';
import {Simulator } from '../src/Simulator'

describe('simulator', function() {
  

  it('simulator_tick', function() {
    let c = new Constant(1);
    c.randos.set(Rando.Birth, 0);
    Randomizer.getInstance().setRandomizer(c);

    let s = new Simulator();
    s.init();
    s.tick(20);
    expect(s.people[0].age(s.year)).equal(20);
    expect(s.people.length).equal(1);

    // Give birth once.
    c.randos.set(Rando.Birth, 1);
    s.tick();
    expect(s.people[1].age(s.year)).equal(0);

    c.randos.set(Rando.Birth, 0);
    s.tick(20);
    expect(s.people[1].age(s.year)).equal(20);
  });
});
