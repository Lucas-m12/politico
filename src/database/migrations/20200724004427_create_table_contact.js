exports.up = (knex) => knex.schema.createTable('contacts', (table) => {
  table.increments().primary();
  table.text('message').notNullable();
  table.string('id_user').nullable();
  table.timestamps(true, true);

  table.foreign('id_user').references('id').inTable('users');
});

exports.down = (knex) => knex.schema.dropTable('contacts');
