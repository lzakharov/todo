import React from 'react';
import Form from './Form.jsx';
import {func} from 'prop-types';

export default class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const item = {name: this.state.value, completed: false};

    if (item.name) {
      this.props.add(item);
      this.setState({value: ''})
    } else {
      alert('Please enter the task!')
    }

    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <input
          className="form-control"
          placeholder="Enter task..."
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </Form>
    );
  }
}

AddForm.propTypes = {
  add: func.isRequired
};
