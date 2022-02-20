import PropTypes from 'prop-types';

import FeedbackItem from "./FeedbackItem";

const FeedBackStats = ({data}) => {
  //Calculate ratings

  let average = data.reduce((acc, current) => {
    return acc + current.rating
  }, 0) / data.length

  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className="feedback-stats">
      <h4>{data.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0: average}</h4>
    </div>
  )
}

FeedBackStats.propTypes = {
  feedback: PropTypes.array.isRequired
}

export default FeedBackStats;