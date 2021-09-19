
exports.up = function(knex) {
  knex.schema.createTable('items', table => {
      table.increments('item_id')
  })
};

exports.down = function(knex) {
    knex.schema.dropTable('items')
};
