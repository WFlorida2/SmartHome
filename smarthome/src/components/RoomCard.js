// Import the React library
import React from 'react';

// Define a functional component called RoomCard
const RoomCard = ({ title }) => {
  return (
    // Render a div element with class "card" and inline style for margin
    <div className="card" style={{ margin: '5px' }}> {/* Adjust margin here */}
      {/* Render a heading element */}
      <h2>Rooms & Space</h2>
      {/* Render a paragraph element with the title */}
      <p>{title}</p>
    </div>
  );
};

// Export the RoomCard component
export default RoomCard;



