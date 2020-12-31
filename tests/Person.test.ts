import { assert, expect } from 'chai';
import { Person } from '../src/Person';
import { Sex } from '../src/Person';
import { Color } from '../src/Person';
import { Constant } from '../src/IRandom';
import { Randomizer } from '../src/IRandom';

describe('person', function() {
  it('sex', function() {
    let p = new Person(Sex.Female, 0, Color.Black);
    expect(p.sex).equal(Sex.Female);
  });

  it('birth', function() {
    Randomizer.getInstance().r = new Constant(1);
    let p = new Person(Sex.Female, 0, Color.Black);
    let tickResult = p.tick(15);
    if (tickResult == null)
    {
      assert.fail("null tickresult");
    }
    expect(tickResult.died).equal(false);
    expect(tickResult.baby).to.not.be.null;
  });

  it('death', function() {
    let p = new Person(Sex.Female, 0, Color.Black);
    Randomizer.getInstance().r = new Constant(1);
    let tickResult = p.tick(85);
    if (tickResult == null)
    {
      assert.fail("null tickresult");
    }
    expect(tickResult.died).equal(true);
    expect(p.deathAge()).equal(85);
  });

  it('age', function() {
    let p = new Person(Sex.Female, 0, Color.Black);
    p.tick(1);
    p.tick(2);
    expect(p.age(2)).equal(2);
  });

});
