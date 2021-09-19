
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_id: 1, username: 'username1', email: 'test1@email.com', password: 'test'},
        {user_id: 2, username: 'username2', email: 'test2@email.com', password: 'test'},
        {user_id: 3, username: 'username3', email: 'test3@email.com', password: 'test'},
        {user_id: 4, username: 'username4', email: 'test4@email.com', password: 'test'},
        {user_id: 5, username: 'username5', email: 'test5@email.com', password: 'test'}
      ]);
    });
};
