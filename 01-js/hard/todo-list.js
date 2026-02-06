/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.todoList = [];
  }
  add(task) {
    this.todoList.push(task);
  }

  remove(idx) {
    if (this.todoList[idx]) this.todoList.splice(idx, 1);
  }

  update(idx, task) {
    if (this.todoList[idx]) this.todoList[idx] = task;
  }

  getAll() {
    return this.todoList;
  }
  get(idx) {
    return this.todoList[idx] ?? null;
  }
  clear() {
    this.todoList = [];
  }
}

module.exports = Todo;
