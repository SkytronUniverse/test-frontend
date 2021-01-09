import React from 'react';
import classes from './Item.css';

const item = (props) => {
    return(
        <div className={classes.Item}>
            <p>ID: {props.id}</p>
            <p>Name: {props.name}</p>
            <p>Type: {props.type}</p>
            <p>Price: ${props.price}</p>
        </div>
    );
}

export default item;