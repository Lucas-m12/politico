exports.up = (knex) => knex.schema.createTable('proposed_opinion', (table) => {
  table.increments().primary();
  table.bigInteger('id_proposed').notNullable();
  table.string('id_user').notNullable();
  table.text('opinion').notNullable();
  table.timestamps(true, true);
  table.integer('status').defaultTo(1);

  table.foreign('id_proposed').references('id').inTable('proposed');
  table.foreign('id_user').references('id').inTable('users');
});

exports.down = (knex) => knex.schema.dropTable('proposed_opinion');
