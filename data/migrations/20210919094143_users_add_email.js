
exports.up = function(knex) {
    knex.schema.table('users', table => {
        table.string('email', 64).unique()
      })
};

exports.down = function(knex) {
    knex.schema.table('users', table => {
        table.dropColumn('email')
    })
};
