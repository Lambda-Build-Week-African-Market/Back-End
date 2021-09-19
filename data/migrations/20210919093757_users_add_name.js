
exports.up = function(knex) {
  knex.schema.table('users', table => {
    table.string('username')
  })
};

exports.down = function(knex) {
  knex.schema.table('users', table => {
      table.dropColumn('username')
  })
};
