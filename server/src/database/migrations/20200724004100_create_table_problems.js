exports.up = (knex) => knex.schema.createTable('problems', (table) => {
  table.bigIncrements().primary();
  table.integer('category').notNullable();
  table.specificType('coordinates', 'point').notNullable();
  table.text('description').nullable();
  table.string('image').notNullable();
  table.string('id_user').nullable();
  table.timestamps(true, true);
  table.integer('status', 1).defaultTo(1);

  table.foreign('category').references('id').inTable('problem_categories');
  table.foreign('id_user').references('id').inTable('users');
});

exports.down = (knex) => knex.schema.dropTable('problems');
