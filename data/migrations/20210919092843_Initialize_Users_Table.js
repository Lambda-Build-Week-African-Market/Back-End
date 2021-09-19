
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
      table.increments('user_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
