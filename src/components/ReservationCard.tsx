import React from 'react'
import { useDispatch } from 'react-redux';
import { removeReservation } from '../features/reservationsSlice';
import { addCustomer } from '../features/customerSlice';

interface ReservationCardTypes {
  index: number,
  name: string
};

function ReservationCard({ index, name }: ReservationCardTypes) {
  const dispatch = useDispatch();
  
  return (
    <div className="name" title="'Click on' to remove" onClick={() => {
      dispatch(removeReservation(index));
      dispatch(addCustomer({
        id: Math.floor(Math.random() * 100),
        name: name,
        food: []
      }))
    }}>{name}</div>
  )
};

export default ReservationCard;
