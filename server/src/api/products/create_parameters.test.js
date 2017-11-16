import chai from 'chai';
import createParameters from './create_parameters';
import options from './queryOptions';

chai.should();

describe('create_parameters', () => {
  it('returns object', () => {
    createParameters({}, {}).should.be.an('object');
  });

  it('returns object with correct keys', () => {
    createParameters({}, options).should.have.all.keys('find', 'sort', 'from', 'limit');
  });

  it('returns object with object.sort equal to default when query is empty', () => {
    createParameters({}, options).sort.should.deep.equal({ apk: -1 });
  });

  it('returns object with object.find equal to empty object when query is empty', () => {
    createParameters({}, options).find.should.deep.equal({});
  });

  it('returns object with object.limit equal to 25 when query is empty', () => {
    createParameters({}, options).limit.should.equal(25);
  });

  it('returns object with object.from equal to 0 when query is empty', () => {
    createParameters({}, options).from.should.equal(0);
  });

  it("returns object with object.sort equal to {price: -1} when query is {sort: '-price'}", () => {
    createParameters({ sort: '-price' }, options).sort.should.deep.equal({ price: -1 });
  });

  it('returns object with object.sort equal to {price: 1} when query is {sort: price}', () => {
    createParameters({ sort: 'price' }, options).sort.should.deep.equal({ price: 1 });
  });

  it("returns object with object.find as object when query is {search: 'substring' }", () => {
    createParameters({ search: 'substring' }, options).find.should.deep.equal({
      $or: [
        { name: { $regex: 'substring', $options: 'i' } },
        { noaccent: { $regex: 'substring', $options: 'i' } },
        { lowercase: { $regex: 'substring', $options: 'i' } },
      ],
    });
  });

  it("returns object with object.find as {category: 'whitewine'} when query is {category: 'whitewine' }", () => {
    createParameters({ category: 'whitewine' }, options).find.should.deep.equal({
      category: 'whitewine',
    });
  });

  it('returns object with object.from equal to 25 when query is {from: 25}', () => {
    createParameters({ from: 25 }, options).from.should.equal(25);
  });
});
