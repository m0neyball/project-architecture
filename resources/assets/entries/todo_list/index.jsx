import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

// reducers
import todos from 'reducers/todos';

// containers
import TodoList from 'entries/todo_list/containers/TodoList.jsx';

// middlewares
import callAPIMiddleware from 'middlewares/call_API_middleware';

const rootReducer = combineReducers({
  todos
});
const store = createStore(rootReducer, applyMiddleware(
  ReduxThunk,
  callAPIMiddleware
));

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
