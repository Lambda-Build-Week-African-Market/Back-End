
exports.up = function(knex) {
    return knex.schema.table('items', table => {
        table.decimal('price').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.table('items', table => {
        table.dropColumn('price')
    })
};
