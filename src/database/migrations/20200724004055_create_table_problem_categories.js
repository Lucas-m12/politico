exports.up = (knex) => knex.schema.createTable('problem_categories', (table) => {
  table.increments().primary();
  table.string('category').notNullable();
  table.integer('status').defaultTo(1);
});

exports.down = (knex) => knex.schema.dropTable('problem_categories');
