exports.up = (knex) => knex.schema.createTable('proposal', (table) => {
  table.bigIncrements().primary();
  table.string('title').notNullable();
  table.text('description').notNullable();
  table.timestamps(true, true);
  table.integer('status', 1).notNullable().defaultTo(1);
});

exports.down = (knex) => knex.schema.dropTable('proposal');
