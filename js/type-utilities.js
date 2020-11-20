"use strict";
const todo = {
    title: ' Estudar Next.js',
    description: 'Next.js, javascript, typescript',
    completed: false,
};
function updateTodo(todo, fieldToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldToUpdate);
}
console.log(todo);
//todo.completed = true;
console.log('----------------------');
const todo2 = updateTodo(todo, { completed: true });
console.log(todo2);
const todo3 = {
    title: 'CSS - Pick teste',
    completed: false,
};
