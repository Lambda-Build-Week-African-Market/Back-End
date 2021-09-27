
exports.up = function(knex) {
  return knex.schema.table('items', table => {
      table.string('location', 64).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.table('items', table => {
      table.dropColumn('location')
  })
};
