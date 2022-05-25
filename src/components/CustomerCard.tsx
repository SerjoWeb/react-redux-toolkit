import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addFood } from '../features/customerSlice';

interface CustomerCardType {
  id: number,
  name: string,
  food: string[]
};

function CustomerCard({ id, name, food }: CustomerCardType) {
  const dispatch = useDispatch();
  const [userFoodInput, setUserFoodInput] = useState('');
  const addUserFoodHandler = () => {
    if (!userFoodInput) return;

    dispatch(addFood({
      id,
      food: userFoodInput
    }));

    setUserFoodInput('');
  };

  return (
    <div className="card" id={`customer_${id}`}>
      <div className="info-controls">
        <p>{name}</p>
        <div className="controls">
          <input
            type="text"
            name="name"
            placeholder="Enter food name"
            value={userFoodInput}
            onChange={(e) => setUserFoodInput(e.target.value)}
          />
          <button type="button" onClick={addUserFoodHandler}>Add</button>
        </div>
      </div>
      <div className="list">
        {
          food.map(item => (
            <p>{item}</p>
          ))
        }
      </div>
    </div>
  )
}

export default CustomerCard;
