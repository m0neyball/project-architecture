import React, { PropTypes } from 'react';

class TodoAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input ref="text" type="text"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }

  onSubmit(e) {
    e.preventDefault();
    const { onAddTodoClick } = this.props;
    const { text } = this.refs;
    if (!text.value.trim()) {
      return;
    }

    onAddTodoClick(text.value);

    text.value = '';
  }
}

TodoAddForm.propTypes = {
  onAddTodoClick: PropTypes.func.isRequired
};

export default TodoAddForm;

