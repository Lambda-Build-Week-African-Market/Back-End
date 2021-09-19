
exports.up = function(knex) {
    knex.schema.table('items', table => {
        table.string('name', 64).unique()
    })
};

exports.down = function(knex) {
    knex.schema.table('items', table => {
        table.dropColumn('name')
    })
};
