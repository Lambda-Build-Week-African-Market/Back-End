
exports.up = function(knex) {
  return knex.schema.createTable('items', table => {
      table.increments('item_id').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('items')
};
