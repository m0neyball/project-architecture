import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(<Welcome name="Ben"/>, document.getElementById('welcome'));
