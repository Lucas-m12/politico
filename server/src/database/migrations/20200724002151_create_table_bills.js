exports.up = (knex) => knex.schema.createTable('bills', (table) => {
  table.bigIncrements().primary();
  table.text('title').notNullable();
  table.text('menu').notNullable();
  table.string('document_key').nullable();
  table.string('document_url').nullable();
  table.timestamps(true, true);
  table.integer('status').defaultTo(1);
});

exports.down = (knex) => knex.schema.dropTable('bills');
