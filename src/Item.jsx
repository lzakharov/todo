import React from 'react';
import {shape, number, string, bool, func} from 'prop-types';

const Item = ({item, toggle, remove}) => (
  <li>
    <span
      onClick={() => toggle(item)}
      style={{textDecoration: item.completed ? 'line-through' : 'none'}}
    >
      {item.name}
    </span>
    <button onClick={() => remove(item)}>
      remove
    </button>
  </li>
);

Item.propTypes = {
  item: shape({
    id: number,
    name: string,
    completed: bool
  }),
  toggle: func.isRequired,
  remove: func.isRequired
}

export default Item;
