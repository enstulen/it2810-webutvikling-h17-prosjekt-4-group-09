import Koa from 'koa';
import Router from 'koa-router';
import BodyParser from 'koa-bodyparser';
import Logger from 'koa-logger';
import cors from 'kcors';

import Mongo from './db/mongo';
import { products, product } from './api/products';
import productsQueryOptions from './api/products/queryOptions';

async function setOptions(ctx, next) {
  ctx.options = productsQueryOptions;
  await next();
}

const app = new Koa();
const router = new Router();

Mongo(app);

app.use(setOptions);

app.use(BodyParser());
app.use(Logger());


router.get('/products', products);

router.get('/products/:code', product);

app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
console.log('Listening on port 3000');
