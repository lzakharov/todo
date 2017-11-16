import React from 'react';
import {shape, number, string, bool, func} from 'prop-types';

const Item = ({item, toggle, remove}) => {
  const handleItemClick = () => {
    toggle(item);
  }

  const handleButtonClick = e => {
    e.stopPropagation();
    remove(item);
  };

  return (
    <a className="list-group-item list-group-item-action" onClick={handleItemClick}>
      {item.completed ? <del>{item.name}</del> : item.name}
      <span className="pull-right">
        <button onClick={handleButtonClick} className="btn btn-xs btn-warning">
          <span className="glyphicon glyphicon-trash"></span>
        </button>
      </span>
    </a>
  )
};


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
