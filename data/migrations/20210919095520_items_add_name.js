
exports.up = function(knex) {
    return knex.schema.table('items', table => {
        table.string('name', 64).unique().notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.table('items', table => {
        table.dropColumn('name')
    })
};
