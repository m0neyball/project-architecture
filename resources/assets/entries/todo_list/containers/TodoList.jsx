import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../../../actions/todo_list';

import Todo from '../components/Todo.jsx';
import TodoAddForm from '../components/TodoAddForm.jsx';

class TodoList extends React.Component {
  render() {
    const { onAddTodoClick } = this.props;
    return (
      <div>
        <TodoAddForm onAddTodoClick={onAddTodoClick}/>
        <ul>
          { this.getTodo() }
        </ul>
      </div>
    );
  }

  getTodo() {
    const { todos } = this.props;
    const result = todos.map((todo) => {
      const todoItem = (
        <Todo
          key={todo.id}
          text={todo.text}/>
      );
      return todoItem;
    });
    return result;
  }
}

const mapStateToProps = (state) => {
  const result = {
    todos: state.todos
  };
  return result;
};

const mapDispatchToProps = (dispatch) => {
  const result = {
    onAddTodoClick: (text) => {
      dispatch(addTodo(text));
    }
  };
  return result;
};

TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoList;
