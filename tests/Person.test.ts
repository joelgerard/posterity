import { expect } from 'chai';
import { Person } from '../src/Person';

describe('person', function() {
  it('hi', function() {
    let p = new Person("Joel");
    let result = p.greet();
    expect(result).equal("Hello, Joel");
  });
});
