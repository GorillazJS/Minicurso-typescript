type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

const todo: Readonly<Todo> = {
  title: ' Estudar Next.js',
  description: 'Next.js, javascript, typescript',
  completed: false,
};

function updateTodo(todo: Todo, fieldToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldToUpdate };
}
console.log(todo);
//todo.completed = true;
console.log('----------------------');

const todo2: Todo = updateTodo(todo, { completed: true });

console.log(todo2);

//Pick
type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo3: TodoPreview = {
  title: 'CSS - Pick teste',
  completed: false,
};

//Omit
type TodoPreview2 = Omit<Todo, 'description'>;
