
exports.up = function(knex) {
  knex.schema.table('items', table => {
      table.string('location', 64)
  })
};

exports.down = function(knex) {
  knex.schema.table('items', table => {
      table.dropColumn('location')
  })
};
