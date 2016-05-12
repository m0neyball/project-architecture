import { TODO_LIST } from 'constants';

const todos = (state = [], action) => {
  switch (action.type) {
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
