
exports.up = function(knex) {
    knex.schema.table('users', table => {
        table.string('password')
      })
};

exports.down = function(knex) {
    knex.schema.table('users', table => {
        table.dropColumn('password')
    })
};
