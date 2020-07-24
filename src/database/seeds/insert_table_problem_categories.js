exports.seed = async (knex) => {
  await knex('problem_category').del();

  return knex('problem_category').insert([
    { category: 'Burocracia' },
    { category: 'Drogas' },
    { category: 'Educação' },
    { category: 'Esporte/lazer' },
    { category: 'Fiscalização' },
    { category: 'Iluminação pública' },
    { category: 'Limpeza urbana' },
    { category: 'Moradia' },
    { category: 'Obras' },
    { category: 'Parque/Praças' },
    { category: 'Regulação urbana' },
    { category: 'Saneamento' },
    { category: 'Saúde' },
    { category: 'Segurança' },
    { category: 'Sinalização' },
    { category: 'Via pública' },
    { category: 'Burocracia' },
  ]);
};
