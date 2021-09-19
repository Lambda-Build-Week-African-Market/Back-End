
exports.up = function(knex) {
    knex.schema.table('items', table => {
        table.string('name').unique()
    })
};

exports.down = function(knex) {
    knex.schema.table('items', table => {
        table.dropColumn('name')
    })
};
