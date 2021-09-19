
exports.up = function(knex) {
  knex.schema.table('items', table => {
      table.foreign('seller').references('users.user_id')
  })
};

exports.down = function(knex) {
  knex.schema.table('items', table => {
      table.dropForeign('seller')
  })
};
