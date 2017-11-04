import isValidQuery from './is_valid';
import createParameters from './create_parameters';


const products = async (ctx) => {
  const query = ctx.request.query;
  if (!isValidQuery(query, ctx.options)) {
    ctx.throw(400, 'Invalid format on query, make sure that all fields are valid');
  } else {
    const parameters = createParameters(query, ctx.options);
    ctx.body = await ctx.app.products.find()
      .sort(parameters.sort)
      .skip(parameters.from)
      .limit(parameters.limit)
      .toArray();
  }
};

export { products };
