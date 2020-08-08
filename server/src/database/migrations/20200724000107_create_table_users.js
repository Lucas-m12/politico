exports.up = (knex) => knex.schema.createTable('users', (table) => {
  table.string('id').notNullable().primary();
  table.string('name').notNullable();
  table.string('surname').notNullable();
  table.bigInteger('phone').notNullable();
  table.string('password').notNullable();
  table.boolean('admin').notNullable().defaultTo(false);
  table.timestamps(true, true);
  table.integer('status', 1).notNullable().defaultTo(1);
});

exports.down = (knex) => knex.schema.dropTable('users');
