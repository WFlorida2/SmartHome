import React from 'react';

const RoomCard = ({ title }) => {
  return (
    <div className="card" style={{ margin: '5px' }}> {/* Adjust margin here */}
      <h2>Rooms & Space</h2>
      <p>{title}</p>
    </div>
  );
};

export default RoomCard;


