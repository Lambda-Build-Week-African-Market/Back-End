
exports.up = function(knex) {
    knex.schema.table('items', table => {
        table.decimal('price')
    })
};

exports.down = function(knex) {
    knex.schema.table('items', table => {
        table.dropColumn('price')
    })
};
