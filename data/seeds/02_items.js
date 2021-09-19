
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {item_id: 1,
          seller: 5,
          location: 'africa1',
          name: 'fruit',
          description: 'yes fruit',
          price: 5.00},
        {item_id: 2,
          seller: 4,
          location: 'africa2',
          name: 'computer',
          description: 'yes computer',
          price: 500.99},
        {item_id: 3,
          seller: 3,
          location: 'africa3',
          name: 'statue',
          description: 'yes statue',
          price: 29.95},
        {item_id: 4,
          seller: 2,
          location: 'africa4',
          name: 'toy',
          description: 'yes toy',
          price: 3.99},
        {item_id: 5,
          seller: 1,
          location: 'africa5',
          name: 'coffee',
          description: 'yes coffee',
          price: 35.97},
      ]);
    });
};
