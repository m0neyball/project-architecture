import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// reducers
import todos from 'reducers/todos';

// containers
import TodoList from 'entries/todo_list/containers/TodoList.jsx';

const rootReducer = combineReducers({
  todos
});
const store = createStore(rootReducer);

class RootApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h2>Todo List</h2>
          <TodoList />
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<RootApp />, document.getElementById('todo-list'));
