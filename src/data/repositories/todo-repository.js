const { Todo, ObjectId } = require('../index');

const insertTodo = async ({ payload }) => {
  const todo = new Todo(payload);
  await todo.save();
  return;
}

const getAllTodos = async () => {
  return await Todo.find();
}

const getTodo = async ({ id }) => {
  return await Todo.findOne({ filter: { _id: id } });
}

const upsertTodo = async ({ id, payload }) => {
  return await Todo.findOneAndUpdate({ _id: id }, payload, { new: true });
}

const deleteTodo = async ({ id }) => {
  return await Todo.findOneAndDelete({ filter: { _id: id } });
}

module.exports = {
  insertTodo,
  getAllTodos,
  getTodo,
  upsertTodo,
  deleteTodo,
}