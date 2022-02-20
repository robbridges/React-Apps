import FeedbackItem from "./FeedbackItem";
import PropTypes from 'prop-types';

const FeedBackList = ({data, handleDelete}) => {
  console.log(data);
  if (!data || data.length === 0) {
    return <p>No Feedback provided yet by the users</p>
  }
  return ( 
  <div className='feedback-list'>
    {data.map((item) => (
      <FeedbackItem 
        key={item.id} 
        item={item} 
        handleDelete={handleDelete} 
      />
    ))}
  </div>
  )
}

FeedBackList.propType = {
  data: PropTypes.array,
}



export default FeedBackList;