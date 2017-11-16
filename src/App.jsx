import React from 'react';
import Container from './Container.jsx';
import AddForm from './AddForm.jsx';
import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {id: 1, name: 'Make cake', completed: false},
        {id: 2, name: 'Write song', completed: false},
        {id: 3, name: 'Seize the World', completed: false}
      ]
    };

    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  add(item) {
    this.setState({items: [item, ...this.state.items]});
  }

  toggle(item) {
    const items = this.state.items;
    this.setState({items: items.map(
      i => i.name === item.name ? {name: item.name, completed: !item.completed} : i)
    });
  }

  remove(item) {
    const items = this.state.items;
    this.setState({items: items.filter(i => i !== item)});
  }

  render() {
    const items = this.state.items;

    return (
      <Container>
        <AddForm add={this.add} />
        <List items={items} toggle={this.toggle} remove={this.remove} />
      </Container>
    );
  }
}

export default App;
