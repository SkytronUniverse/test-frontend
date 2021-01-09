import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Items from '../components/Items/Items';
import ItemForm from '../components/ItemForm/ItemForm';
import axios from 'axios';
import classes from './App.css';


class App extends Component {

  state = {
    items: [{}]
  }

  componentDidMount() {
    this.getData()

  }

  getData() {
    const apiURL = "http://localhost:1323/inventory";
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    };
    axios.get(apiURL, config)
    .then((response) => { 
      console.log("Data:", response.data);
      const items = response.data;
      this.setState({items: items});
    })
  }

  render() {

    let items = null;
    items = (
      <Items 
        items={this.state.items}
      />
    )
    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
        >
        </Cockpit>
        {items}
        <ItemForm></ItemForm>
      </div>
    );
  }
}

export default App;
