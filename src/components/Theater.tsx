import React, { useState } from 'react';

const Seat = ({ index }) => {
  const [active, setActive] = useState(false);

  const seatClassNames = `seat ${active && 'active'}`;

  return (<div className={seatClassNames} onClick={() => setActive(!active)}>{index}</div>)
}

export default () => {
  const renderSeats = () => {
    const seats = [];
    for (let i = 0; i <= 250; i++) {
      seats.push(<Seat index={i}/>)
    }
    return seats;
  }

  return (
    <>
      {renderSeats()}
    </>
  );
}