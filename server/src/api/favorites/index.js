import jsonwebtoken from 'jsonwebtoken';
import mongodb from 'mongodb';
import { SECRET } from '../../jwt';

const ObjectID = mongodb.ObjectID;

const allFavorites = async (ctx) => {
  const token = ctx.request.header.authorization;
  const key = token.split(' ')[1];
  const decoded = jsonwebtoken.verify(key, SECRET);
  const user = await ctx.app.users.findOne({ _id: ObjectID(decoded.id) });
  const productIDs = user.favorites;
  const products = [];
  await Promise.all(productIDs.map(async (productID) => {
    products.push(await ctx.app.products.findOne({ _id: ObjectID(productID) }));
  }));
  ctx.body = products;
};

const oneFavorite = async (ctx) => {
  const token = ctx.request.header.authorization;
  const key = token.split(' ')[1];
  const decoded = jsonwebtoken.verify(key, SECRET);
  const documentId = ctx.params.id;
  const updatedUser = await ctx.app.users.findOne({ _id: ObjectID(decoded.id) });
  console.log(updatedUser);
  if (updatedUser) {
    ctx.response.status = 200;
    ctx.body = updatedUser.favorites.indexOf(documentId) > -1;
  } else {
    ctx.response.status = 404;
  }
};

const newFavorite = async (ctx) => {
  const token = ctx.request.header.authorization;
  const key = token.split(' ')[1];
  const decoded = jsonwebtoken.verify(key, SECRET);
  const documentId = ctx.params.id;
  const updatedUser = await ctx.app.users.update({ _id: ObjectID(decoded.id) },
    { $addToSet: {
      favorites: documentId,
    },
    },
  );
  if (updatedUser) {
    ctx.response.status = 201;
  } else {
    ctx.response.status = 404;
  }
};

const deleteFavorite = async (ctx) => {
  const token = ctx.request.header.authorization;
  const key = token.split(' ')[1];
  const decoded = jsonwebtoken.verify(key, SECRET);
  const documentId = ctx.params.id;
  const updatedUser = await ctx.app.users.update({ _id: ObjectID(decoded.id) },
    { $pull: {
      favorites: documentId,
    },
    },
  );
  if (updatedUser) {
    ctx.response.status = 200;
  } else {
    ctx.response.status = 404;
  }
};


export { allFavorites, newFavorite, deleteFavorite, oneFavorite };
