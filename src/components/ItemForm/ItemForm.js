import React, { Component } from 'react';
import axios from 'axios';
import classes from './ItemForm.css';

class ItemForm extends Component {

    state = {
        entry: {
            id: '',
            name: '',
            type: '',
            price: ''
        }
        
    }



    inputChangeHandler = ( event ) => {
        
        const value = event.target.value;
        const field = event.target.name
        if(field === 'id') {
            if( value !== 'a' && value !== 'A' && value !== ''){
                alert("Input not valid. Must be A or a");
            }
        }
        /*this.setState({
            entry: {...this.state.entry, [event.target.name]: value}
        });

        console.log("Entry", this.state.entry); */
    }

    submitHandler = (event) => {
        event.preventDefault();
        const apiURL = 'http://localhost:1323/addProduct';
        const inputID = this.state.entry.id;
        const inputName = this.state.entry.name;
        const inputType = this.state.entry.type;
        const inputPrice = this.state.entry.price;
        
        console.log("ID:", inputID);
        console.log("Name:", inputName); 
        if (inputID !== '' && inputName !== '' && inputType !== '' && inputPrice !== '') {
            const entry = {
                id: inputID,
                name: inputName,
                type: inputType,
                price: inputPrice
            }
    
            axios.post(apiURL, entry)
            .then(response => {
                console.log(response);
                console.log(response.data);
            });
        }

        this.setState({entry: {id: '', description: ''}});
        
    }

    render() {
        return(
            <div className={classes.ItemForm}>
                <form onSubmit={this.submitHandler}>
                    <p>
                        <label>
                            ID:
                            <input 
                                type="text" 
                                name="id"
                                onChange={this.inputChangeHandler} />
                        </label>
                    </p>
                    <p>
                        <label>
                            Name:
                            <input 
                                type="text" 
                                name="name" 
                                onChange={this.inputChangeHandler} />
                        </label>
                    </p>
                    <p>
                        <label>
                            Type:
                            <input 
                                type="text" 
                                name="type" 
                                onChange={this.inputChangeHandler} />
                        </label>
                    </p>
                    <p>
                        <label>
                            Price:
                            <input 
                                type="text" 
                                name="price" 
                                onChange={this.inputChangeHandler} />
                        </label>
                    </p>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default ItemForm;