import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    return (
        <div className={classes.Cockpit} >
            <h1>{props.title}</h1>
        </div>
    );
};

export default cockpit;