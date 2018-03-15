import React, {Component} from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({name, completed, onDelete, onToggle}) => (
    <li>
        <span
            style={{textDecoration: completed ? 'line-through': 'none'}}
            onClick={onToggle}
        >
            {name}
        </span>
        <span onClick={onDelete}> X </span>
    </li>
);


export default TodoItem;