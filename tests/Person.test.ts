import { expect } from 'chai';
import { Person } from '../src/Person';
import { Sex } from '../src/Person';
import { Color } from '../src/Person';
import { Constant } from '../src/IRandom';

describe('person', function() {
  it('sex', function() {
    let p = new Person(Sex.Female, 0, Color.Black);
    expect(p.sex).equal(Sex.Female);
  });

  it('birth', function() {
    let p = new Person(Sex.Female, 0, Color.Black);
    p.random = new Constant(1);
    let tickResult = p.tick(15);
    
    expect(tickResult.died).equal(false);
    expect(tickResult.baby).to.not.be.null;
  });

  it('death', function() {
    let p = new Person(Sex.Female, 0, Color.Black);
    p.random = new Constant(1);
    let tickResult = p.tick(85);
    
    expect(tickResult.died).equal(true);
    expect(p.deathAge()).equal(85);
  });

});
