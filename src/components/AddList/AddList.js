import React from 'react';
import './AddList.css';

const AddList = (props) => {
    const { list } = props;
    console.log(list.name);

    let total = 0;
    for (const developer of list) {
        total = total + developer.salary;

    }
    return (
        <div className="add-to-list">
            <h2>Hire Us</h2>
            <h4>Developer Selected: {props.list.length}</h4>
            <p>Name: Ramiro Glover</p>
            <h4>Total Cost: ${total.toFixed(2)}</h4>
            <button className="btn-confirm">Confirm</button>
            <button className="btn-cancel">Cancel</button>
        </div>
    );
};

export default AddList;