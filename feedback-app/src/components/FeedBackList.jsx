import {motion, AnimatePresence} from 'framer-motion';
import {useContext} from 'react'
import FeedbackItem from "./FeedbackItem";
import FeedBackContext from '../context/FeedBackContext';
import Spinner from './shared/Spinner';

const FeedBackList = ({ handleDelete}) => {
  const {feedBack, isLoading} = useContext(FeedBackContext)

  if (!isLoading &&  (!feedBack || feedBack.length === 0)) {
    return <p>No Feedback provided yet by the users</p>
  }

  return isLoading ? <Spinner /> : ( 
    <div className='feedback-list'>
      <AnimatePresence>
      {feedBack.map((item) => (
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




export default FeedBackList;