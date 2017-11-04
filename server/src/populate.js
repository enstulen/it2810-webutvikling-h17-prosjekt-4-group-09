import vinmonopolet from 'vinmonopolet';

import Mongo from './db/mongo';


const APK_CATEGORIES = {
  whitewine: [
    'Hvitvin',
  ],
  redwine: [
    'Rødvin',
  ],
  rosewine: [
    'Rosévin',
  ],
  beer: [
    'India pale ale',
    'Porter & stout',
    'Surøl', 'Klosterstil',
    'Saison farmhouse ale',
    'Spesial', 'Pale ale',
    'Hveteøl',
    'Lys lager',
    'Lys ale',
    'Red/amber',
    'Mørk lager',
    'Barley wine',
    'Brown ale',
    'Scotch ale',
  ],
  strongwine: [
    'Sterkvin, annen',
    'Vermut',
    'Portvin',
    'Sherry',
    'Madeira',
  ],
  pearlywine: [
    'Perlende vin, hvit',
    'Perlende vin, rosé',
    'Perlende vin, rød',
  ],
  cider: [
    'Sider',
  ],
  sparklingwine: [
    'Musserende vin',
    'Champagne, brut',
    'Champagne extra brut',
    'Musserende vin, rosé',
    'Champagne, rosé',
    'Champagne, sec',
    'Champagne, annen',
  ],
  spirits: [
    'Whisky',
    'Vodka',
    'Gin',
    'Druebrennevin',
    'Akevitt',
    'Brennevin, annet',
    'Rom',
    'Likør',
    'Bitter',
    'Genever',
    'Brennevin, nøytralt < 37,5 %',
    'Fruktbrennevin',
  ],
  fruitwine: [
    'Fruktvin',
  ],
  aromaticwine: [
    'Aromatisert vin',
  ],
  sake: [
    'Sake',
  ],
  mjod: [
    'Mjød',
  ],
};

const app = {};

Mongo(app);

const calculateAPK = (cost, volume, percentage) => ((percentage / 100) * volume * 1000) / cost;

const compareAPK = (a, b) => b.apk - a.apk;

const sortByAPK = unsortedProducts => unsortedProducts.sort(compareAPK);

const calculatePoints = (highest, apk) => Math.ceil(
  (parseFloat(apk, 10) / parseFloat(highest, 10)) * 100) - 1;

/* eslint-disable no-param-reassign */
const addPoints = (highest, products) => {
  for (let i = 0; i < products.length; i += 1) {
    products[i].points = calculatePoints(highest, products[i].apk);
  }
};
/* eslint-enable no-param-reassign */

const getCategory = (categories, productType) => {
  for (let i = 0; i < categories.length; i += 1) {
    for (let j = 0; j < APK_CATEGORIES[categories[i]].length; j += 1) {
      if (APK_CATEGORIES[categories[i]][j] === productType) {
        return categories[i];
      }
    }
  }
  return 'none';
};

const BASE_URL = 'https://bilder.vinmonopolet.no/cache/';

const THUMBNAIL = '95x95-0/';

const BIG = '300x300-0/';

const END = '-1.jpg';

const thumbnailImageURL = code => BASE_URL + THUMBNAIL + code + END;

const bigImageURL = code => BASE_URL + BIG + code + END;

const createCategories = (sortedProducts) => {
  const indexedCategories = {};
  const categories = Object.keys(APK_CATEGORIES);
  for (let i = 0; i < sortedProducts.length; i += 1) {
    const productType = sortedProducts[i].productType;
    const category = getCategory(categories, productType);

    if (!Object.prototype.hasOwnProperty.call(indexedCategories, category)) {
      indexedCategories[category] = [];
    }
    indexedCategories[category].push(i);
  }
  return indexedCategories;
};

vinmonopolet
  .stream.getProducts()
  .on('data', (product) => {
    const metaProduct = product;
    metaProduct.images = {};
    metaProduct.images.thumbnail = thumbnailImageURL(metaProduct.code);
    metaProduct.images.big = bigImageURL(metaProduct.code);
    metaProduct.apk = calculateAPK(metaProduct.price, metaProduct.containerSize, metaProduct.abv);
    metaProduct.category = getCategory(Object.keys(APK_CATEGORIES), metaProduct.productType);
    metaProduct.points = 87;
    app.products.insert(metaProduct);
  })
  .on('end', () => {
    //addPoints(sortedProducts[0].apk, sortedProducts);
    
    console.log('done');
  });
