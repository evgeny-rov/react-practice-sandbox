import React, { useState, useEffect } from 'react';

let seats = 250;

export default () => {
  const [state, setState] = useState({
    id: 0,
    date: 19022020,
    time: 1805,
    name: 'Shawn Shake',
    room: 'Large',
    AvailableSeats: 0,
  });

  const [reservedSeats, setReservedSeats] = useState(0);

  const checkForNewSeatsUpdate = () => {
    console.log('check')
    const { AvailableSeats } = state;
    if (AvailableSeats !== seats) setState({ ...state, AvailableSeats: seats})
  }

  useEffect(() => {
    const interval = setInterval(() => checkForNewSeatsUpdate(), 10000);
  })

  const renderState = () => {
    const stateToArray = Object.entries(state);
    return stateToArray.map(([type, value]) => {
      return <p key={type} className="line">{type}: {value}</p>;
    })
  }

  const handleNewReservations = () => {
    console.log(seats)
    seats -= reservedSeats;
    setReservedSeats(0);
    /*
    const { AvailableSeats } = state;
    const newNumOfAvailableSeats = AvailableSeats - reservedSeats;
    setState({ ...state, AvailableSeats: newNumOfAvailableSeats });
    setReservedSeats(0);
    */
  }

  return (
    <div className="state-wrapper">
      {renderState()}
      <input type="text" name="order" value={reservedSeats} onChange={({ target }) => setReservedSeats(Number(target.value))} />
      <input type="button" value="submit" onClick={() => handleNewReservations()}/>
    </div>
  );
}