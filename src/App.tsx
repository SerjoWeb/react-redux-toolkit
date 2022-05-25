import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './app/store';

import './App.css';

import { addReservation } from './features/reservationsSlice';

import ReservationCard from './components/ReservationCard';
import CustomerCard from './components/CustomerCard';

function App() {
  const [reservationNameInput, setReservationNameInput] = useState('');
  const reservations = useSelector((state: RootState) => state.reservations.value);
  const customers = useSelector((state: RootState) => state.customer.value);
  const dispatch = useDispatch();
  const addReservationNameHandle = () => {
    if (!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput('');
  };

  return (
    <div className="app">
      <div className="container">
        <div className="name-list">
          <h1>Reservations:</h1>
          <div className="content">
            <div className="list">
              {
                reservations.map((name, index) => (
                  <ReservationCard key={Math.floor(Math.random() * 100)} index={index} name={name} />
                ))
              }
            </div>
            <div className="controls">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={reservationNameInput}
                onChange={(e) => setReservationNameInput(e.target.value)}
              />
              <button type="button" onClick={addReservationNameHandle}>Add</button>
            </div>
          </div>
        </div>
        <div className="reservation-list">
          {
            customers.map((customer) => (
              <CustomerCard
                key={Math.floor(Math.random() * 100)}
                id={customer.id}
                name={customer.name}
                food={customer.food}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
