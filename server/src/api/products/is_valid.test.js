import chai from 'chai';
import isValid from './is_valid';
import options from './queryOptions';

chai.should();

describe('is_valid', () => {
  it('returns true if query is empty', () => {
    isValid({}, options).should.equal(true);
  });

  it('returns true if query.from is integer as string', () => {
    isValid({ from: '25' }, options).should.equal(true);
  });

  it('returns false if query.from is integer as number', () => {
    isValid({ from: 25 }, options).should.equal(false);
  });

  it('returns true if query.limit is integer as string', () => {
    isValid({ from: '10' }, options).should.equal(true);
  });

  it('returns true if query.search is string', () => {
    isValid({ search: 'asd' }, options).should.equal(true);
  });

  it('returns true if query.sort is valid string based on options', () => {
    isValid({ sort: '-apk' }, options).should.equal(true);
  });

  it('returns false if query.sort is not valid string based on options', () => {
    isValid({ sort: '-asspk' }, options).should.equal(false);
  });

  it('returns true if query.category is valid string based on options', () => {
    isValid({ category: 'whitewine' }, options).should.equal(true);
  });

  it('returns false if query.category is not valid string based on options', () => {
    isValid({ category: 'whitewsssine' }, options).should.equal(false);
  });

  it('returns false if query.sort is not valid string based on multiple -', () => {
    isValid({ sort: '-apk-asd' }, options).should.equal(false);
  });

  it('returns false if query.sort is not valid string based on position of -', () => {
    isValid({ sort: 'apk-asd' }, options).should.equal(false);
  });

  it('returns false if query key is not valid', () => {
    isValid({ lol: 'lal' }, options).should.equal(false);
  });
});
