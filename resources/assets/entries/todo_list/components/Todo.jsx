import React, { PropTypes } from 'react';

class Todo extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <li>{text}</li>
    );
  }
}

Todo.propTypes = {
  text: PropTypes.string.isRequired
};

export default Todo;
