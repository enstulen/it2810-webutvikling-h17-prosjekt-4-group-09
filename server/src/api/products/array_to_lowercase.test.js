import chai from 'chai';
import arrayToLowercase from './array_to_lowercase';

chai.should();

describe('array_to_lowercase', () => {
  it('returns empty string when input is empty string', () => {
    arrayToLowercase([]).length.should.equal(0);
  });

  it('return array with one element when input is array with one element', () => {
    arrayToLowercase(['asd']).length.should.equal(1);
  });

  it('returns string array with all elements lowercase', () => {
    arrayToLowercase(['ASD', 'AFD']).should.be.an('array').that.include.members(['afd', 'afd']);
  });
});
