exports.up = (knex) => knex.schema.table('problems', (table) => {
  table.string('image_key').nullable();
  table.dropColumn('image');
  table.string('image_url').nullable();
});

exports.down = (knex) => knex.schema.table('problems', (table) => {
  table.dropColumn('image_url');
  table.string('image').notNullable();
  table.dropColumn('image_key');
});
