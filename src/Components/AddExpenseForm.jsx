import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from '../Context/AppContext';


function AddExpenseForm() {

    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState(''); 
    const [cost, setCost] = useState(0); 
 
    const onSubmit = (e) => {
        e.preventDefault(); 

        const expense = {
            id: uuidv4(),
            name: name, 
            cost: parseInt(cost)
        }; 

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        }); 

        setName(''); 
        setCost(0); 
    };

  return (
    <form onSubmit={onSubmit}>
        <div className='row'>
            <div className='col-sm'>
                <label for='name'>Name</label>
                <input
                    required='required'
                    type='text'
                    className='form-control'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                ></input>
            </div>
            <div className='col-sm'>
                <label for='cost'>Cost</label>
                <input
                    required='required'
                    type='text'
                    className='form-control'
                    id='cost'
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}  
                ></input>
            </div>

        </div>
        <div className='row'>
            <div className='col-sm'>
                <button type='submit' className='btn btn-primary mt-3'>
                    Save
                </button>
            </div>
        </div>
    </form>
  )
}

export default AddExpenseForm