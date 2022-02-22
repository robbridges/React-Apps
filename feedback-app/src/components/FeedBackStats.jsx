
import { useContext } from 'react';
import FeedBackContext from '../context/FeedBackContext';



const FeedBackStats = () => {
  const {feedBack} = useContext(FeedBackContext)
  //Calculate ratings

  let average = feedBack.reduce((acc, current) => {
    return acc + current.rating
  }, 0) / feedBack.length

  average = average.toFixed(1).replace(/[.,]0$/, '');
  //small UI improvement dynanimcally chage review to reviews if there is more than one
  let reviewText = feedBack.length === 1? 'Review' : 'Reviews'

  return (
    <div className="feedback-stats">
      <h4>{feedBack.length} {reviewText}</h4>
      <h4>Average Rating: {isNaN(average) ? 0: average}</h4>
    </div>
  )
}


export default FeedBackStats;