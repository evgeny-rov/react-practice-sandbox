import React, { useState } from 'react';

interface seatOptions {
  vip?: boolean,
  couch?: boolean,
}

const Seat = ({ id, options }) => {
  const [active, setActive] = useState(false);
  const { vip, couch } = options;

  const activeClassName = active ? ' active' : ''; 
  const vipClassName = vip ? ' vip' : '';
  const couchClassName = couch ? ' couch' : '';

  const seatClassNames = `seat${activeClassName}${vipClassName}${couchClassName}`;

  return (<td key={id} className={seatClassNames} onClick={() => setActive(!active)}>{id}</td>)
}

export default () => {
  const renderSeats = (amount: number, options: seatOptions = {}) => {
    const seats = [];

    for (let i = 1; i <= amount; i++) {
      seats.push(<Seat key={i} id={i} options={options} />)
    }

    return seats;
  }


  return (
    <table>
      <tbody>
        <tr className='seat-row'>{renderSeats(23)}</tr>
        <tr className='seat-row'>{renderSeats(25)}</tr>
        <tr className='seat-row'>{renderSeats(25)}</tr>
        <tr className='seat-row'>{renderSeats(5)}{renderSeats(15, { vip: true })}{renderSeats(5)}</tr>
        <tr className='seat-row'>{renderSeats(5)}{renderSeats(15, { vip: true })}{renderSeats(5)}</tr>
        <tr className='seat-row'>{renderSeats(5)}{renderSeats(15, { vip: true })}{renderSeats(5)}</tr>
        <tr className='seat-row'>{renderSeats(5)}{renderSeats(15, { vip: true })}{renderSeats(5)}</tr>
        <tr className='seat-row'>{renderSeats(5)}{renderSeats(15, { vip: true })}{renderSeats(5)}</tr>
        <tr className='seat-row'>{renderSeats(5)}{renderSeats(15, { vip: true })}{renderSeats(5)}</tr>
        <tr className='seat-row'>{renderSeats(5)}{renderSeats(15, { vip: true })}{renderSeats(5)}</tr>
        <tr className='seat-row'>{renderSeats(3)}{renderSeats(15, { vip: true })}{renderSeats(3)}</tr>
        <tr className='seat-row'>{renderSeats(21)}</tr>
        <tr className='seat-row'>{renderSeats(21)}</tr>
        <tr className='seat-row'>{renderSeats(12, { couch: true })}</tr>
      </tbody>
    </table>
  ) 
}