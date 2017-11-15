import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  add(item) {
    this.setState({items: [...this.state.items, item]});
  }

  toggle(item) {
    const items = this.state.items;
    this.setState({
      items: items.map(
        i => i.name == item.name ? {name: item.name, completed: !item.completed} : i)
    });
  }

  remove(item) {
    const items = this.state.items;
    this.setState({items: items.filter(i => i != item)});
  }

  render() {
    const items = this.state.items;

    return (
      <p>Simple to-do list app.</p>
    );
  }
}

export default App;
