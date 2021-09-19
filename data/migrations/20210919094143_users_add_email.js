
exports.up = function(knex) {
    knex.schema.table('users', table => {
        table.string('email').unique()
      })
};

exports.down = function(knex) {
    knex.schema.table('users', table => {
        table.dropColumn('email')
    })
};
