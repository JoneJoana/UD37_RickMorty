/*
como usar faker para generar una cierta cantidad de libros
no lo usamos ya que partiremos de unos datos ya existentes
de characters.

let faker = require('faker');

let database = {books: []};

for(let i=0;i<=16;i++){
  database.books.push({
    id:i,
    title: faker.lorem.words(),
    description: faker.lores.sentences(),
    published: true
  });
}

console.log(Json.stringify(database));

*/
