
exports.up = function(knex) {
  knex.schema.createTable('users', table => {
      table.increments('user_id')
  })
};

exports.down = function(knex) {
  knex.schema.dropTable('users')
};
