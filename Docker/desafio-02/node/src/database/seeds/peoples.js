exports.seed = async function(knex) {
  
  await knex('people').del()
  await knex('people').insert([
      {name: 'Gabrielzin da motorizada'},
      {name: 'Wawa tamboretin de bar'},
      {name: 'Graminha motoboy'},
      {name: 'Mario Botitão'}
  ]);
};
