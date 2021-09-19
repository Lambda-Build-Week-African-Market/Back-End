
exports.up = function(knex) {
    return knex.schema.table('users', table => {
        table.string('email', 64).unique().notNullable()
      })
};

exports.down = function(knex) {
    return knex.schema.table('users', table => {
        table.dropColumn('email')
    })
};
