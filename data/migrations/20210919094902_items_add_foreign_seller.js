
exports.up = function(knex) {
  return knex.schema.table('items', table => {
      table.integer('seller').notNullable().references('user_id').inTable('users')
  })
};

exports.down = function(knex) {
  return knex.schema.table('items', table => {
      table.dropForeign('seller')
  })
};
