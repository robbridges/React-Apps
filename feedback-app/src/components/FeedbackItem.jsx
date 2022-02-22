import { useContext } from 'react';
import FeedBackContext from '../context/FeedBackContext';

import Card from './shared/Card'
import {FaTimes, FaEdit} from 'react-icons/fa'
import PropTypes from 'prop-types'




const FeedbackItem = ({item}) => {
  const {deleteFeedBack, editFeedBack} = useContext(FeedBackContext);
  return (
  <Card>
    <div className="num-display">{item.rating}</div>
    <button onClick={ () => deleteFeedBack(item.id)} className='close'>
      <FaTimes color='red' />
    </button>
    <button onClick={() => editFeedBack(item)} className='edit'>
      <FaEdit color='purple' />
    </button>
    <div className="text-display">{item.text}</div>
  </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}


export default FeedbackItem;