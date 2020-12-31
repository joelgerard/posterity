import { expect } from 'chai';
import { Person } from '../src/Person';
import { Sex } from '../src/Person';
import { Color } from '../src/Person';
import { Constant } from '../src/IRandom';
import {Simulator } from '../src/Simulator'

describe('simulator', function() {
  

  it('simulator_tick', function() {
    let s = new Simulator();
    s.tick();
  });



 

});
