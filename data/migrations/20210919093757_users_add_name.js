
exports.up = function(knex) {
  return knex.schema.table('users', table => {
    table.string('username', 24).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.table('users', table => {
      table.dropColumn('username')
  })
};
