export default {
  limit: {
    defaultValue: 25,
    type: Number,
  },
  from: {
    defaultValue: 0,
    type: Number,
  },
  sort: {
    defaultValue: {
      apk: -1,
    },
    type: Object,
    acceptedQueryValues: [
      'apk',
      'price',
      'points',
      'abv',
      'pricePerLiter',
      'containerSize',
      'vintage',
      'name',
    ],
  },
  category: {
    type: String,
    defaultValue: {},
    acceptedQueryValues: [
      'whitewine',
      'redwine',
      'rosewine',
      'beer',
      'strongwine',
      'pearlywine',
      'cider',
      'sparklingwine',
      'spirits',
      'fruitwine',
      'aromaticwine',
      'sake',
      'mjod',
    ],
  },
};
