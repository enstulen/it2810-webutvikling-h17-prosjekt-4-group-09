import MongoClient from 'mongodb';

const MONGO_URL = 'mongodb://localhost:27017/apk';

/* eslint-disable no-param-reassign */
export default function (app) {
  MongoClient.connect(MONGO_URL)
    .then((connection) => {
      app.products = connection.collection('products');
      app.users = connection.collection('users');
      console.log('Database connection established');
    })
    .catch(err => console.error(err));
}
