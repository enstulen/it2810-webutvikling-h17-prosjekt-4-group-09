import Koa from 'koa';
import Router from 'koa-router';
import BodyParser from 'koa-bodyparser';
import Logger from 'koa-logger';
import cors from 'kcors';

import Mongo from './db/mongo';
import { products, product } from './api/products';
import productsQueryOptions from './api/products/queryOptions';
import { registerUser, getToken } from './api/users';
import { allFavorites, newFavorite, deleteFavorite, oneFavorite } from './api/favorites';
import { jwtInstance } from './jwt';

async function setOptions(ctx, next) {
  ctx.options = productsQueryOptions;
  await next();
}

const app = new Koa();
const router = new Router();
const privateRouter = new Router();

privateRouter.use(jwtInstance);

Mongo(app);

app.use(setOptions);
app.use(BodyParser());
app.use(Logger());


router.get('/products', products);

router.get('/products/:code', product);

router.post('/users', registerUser);

router.post('/auth', getToken);

privateRouter.get('/favorites', allFavorites);

privateRouter.post('/favorites/:id', newFavorite);

privateRouter.delete('/favorites/:id', deleteFavorite);

privateRouter.get('/favorites/:id', oneFavorite);

app.use(cors());
app.use(router.routes()).use(router.allowedMethods());
app.use(privateRouter.routes()).use(privateRouter.allowedMethods());

app.listen(3000);
console.log('Listening on port 3000');
