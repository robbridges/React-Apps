import { useState } from "react";

const FeedbackItem = () => {
  const [rating, setRating] = useState(7);
  const [textDisplay, setTextDisplay] = useState('this is an example of feedback Item text');
  
  return (
  <div className='card'>
    <div className="num-display">{rating}</div>
    <div className="text-display">{textDisplay}</div>
  </div>
  )
}

export default FeedbackItem;