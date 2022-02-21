import {motion, AnimatePresence} from 'framer-motion';

import FeedbackItem from "./FeedbackItem";
import PropTypes from 'prop-types';

const FeedBackList = ({data, handleDelete}) => {
  if (!data || data.length === 0) {
    return <p>No Feedback provided yet by the users</p>
  }
  return ( 
  <div className='feedback-list'>
    <AnimatePresence>
    {data.map((item) => (
      <motion.div
      key={item.id}
      inital={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
      <FeedbackItem 
        key={item.id} 
        item={item} 
        handleDelete={handleDelete}
      />
      </motion.div> 
    ))}
    </AnimatePresence>
  </div>
  )
}

FeedBackList.propType = {
  data: PropTypes.array,
}



export default FeedBackList;