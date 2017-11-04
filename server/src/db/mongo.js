import MongoClient from 'mongodb';

const MONGO_URL = 'mongodb://localhost:27017/apk';

/* eslint-disable no-param-reassign */
export default function (app) {
  MongoClient.connect(MONGO_URL)
    .then((connection) => {
      app.products = connection.collection('products');
      app.categories = connection.collection('categories');
      console.log('Database connection established');
    })
    .catch(err => console.error(err));
}
