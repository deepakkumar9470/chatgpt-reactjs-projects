import React, { useState } from 'react';
import './star.scss'

import StarRating from 'react-star-rating';


function Star() {

  const [rating, setRating] = useState(3);
  const [colors, setColors] = useState(Array(5).fill(''));

  function handleButtonClick() {
    const newColors = Array(5).fill('');
    console.log('newColors',newColors)
    newColors[rating - 1] = 'red';
    if (rating > 1) newColors[rating - 2] = 'blue';
    if (rating < 5) newColors[rating] = 'green';
    setColors(newColors);
  }

  return (
   
    <>
       <StarRating
        totalStars={5}
        rating={rating}
        onRatingClick={(newRating) => setRating(newRating)}
        starClass={`star`}
        
      />
      <button onClick={handleButtonClick}>Change Color</button>
    </>
    
  );
}
export default Star