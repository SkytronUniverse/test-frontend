import React, { Component } from 'react';
import Item from './Item/Item';
import classes from "./Items.css"

class Items extends Component {

    render() {
        return this.props.items.map((item, index) => {
            return (
                <Item
                    id={item.id}
                    name={item.name}
                    type={item.type}
                    price={item.price}
                    key={Math.random()} />
            );
            
        });
    }
}

export default Items;