
exports.up = function(knex) {
    return knex.schema.table('items', table => {
        table.string('description', 1000).unique().notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.table('items', table => {
        table.dropColumn('description')
    })
};
