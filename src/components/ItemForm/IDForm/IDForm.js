import React from 'react';

const id = ( props ) => {
    
    const validate = (props) => {
        if (props.value !== 'a' && props.value !== 'A') {
            alert("Invalid input");
        }
    } 

    return(
        <div>
            <p>
                <label>
                    ID:
                    <input
                        value={props.value} 
                        type="text" 
                        name="id"
                        onChange={this.validate} />
                </label>
            </p>
        </div>
    );
}

export default id;