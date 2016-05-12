import { TODO_LIST } from 'constants';

let nextTodoId = 0;

export const addTodo = (text) => {
  const action = {
    type: TODO_LIST.ADD_TODO,
    id: nextTodoId++,
    text
  };
  return action;
};
