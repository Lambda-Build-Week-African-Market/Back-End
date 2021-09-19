
exports.up = function(knex) {
    knex.schema.table('items', table => {
        table.string('description', 1000).unique()
    })
};

exports.down = function(knex) {
    knex.schema.table('items', table => {
        table.dropColumn('description')
    })
};
