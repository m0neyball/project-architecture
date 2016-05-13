import { TODO_LIST } from 'constants';

const todos = (state = [], action) => {
  switch (action.type) {
    case TODO_LIST.LOAD_TODOS_REQUEST: {
      console.log('LOAD_TODOS_REQUEST');
      return state;
    }
    case TODO_LIST.LOAD_TODOS_SUCCESS: {
      return [...action.response.todos];
    }
    case TODO_LIST.LOAD_TODOS_FAILURE: {
      console.log(action.response);
      return state;
    }

    case TODO_LIST.ADD_TODO: {
      const todo = {
        id: action.id,
        text: action.text
      };
      return [
        ...state,
        todo
      ];
    }

    default:
      return state;
  }
};

export default todos;
