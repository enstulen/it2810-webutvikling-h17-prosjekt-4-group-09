import Koa from 'koa';
import Router from 'koa-router';
import BodyParser from 'koa-bodyparser';
import Logger from 'koa-logger';
import cors from 'kcors';
import request from 'request';

import Mongo from './db/mongo';
import { products, product } from './api/products';
import productsQueryOptions from './api/products/queryOptions';

async function getMapCords(url) {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        resolve(body);
      } else {
        resolve('Internal error');
        reject(error);
      }
    });
  });
}

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

const map = async (ctx) => {
  const options = {
    url: 'https://mapsearch.eniro.com/search/search.json?profile=no&index=yp_sp&q=a%20s%20vinmonopolet&BBOX=4.21875%2C56.96893619436121%2C12.073974609375%2C62.865168668923125&pageSize=500',
    headers: { 'User-Agent': 'request' },
  };

  const response = await getMapCords(options.url); //Yay, HTTP requests with no callbacks! 
  console.log(JSON.parse(JSON.stringify(response)));
  ctx.body = response.search;
};

router.get('/map', map);

app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
console.log('Listening on port 3000');
