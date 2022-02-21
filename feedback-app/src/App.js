import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

import Header from './components/Header';
import FeedBackList from './components/FeedBackList';
import FeedBackData from './data/FeedBackData';
import FeedBackStats from './components/FeedBackStats';
import FeedbackForm from './components/FeedbackForm';

const App = () => {
  const [feedback, setFeedBack] = useState(FeedBackData)
  
  const deleteFeedBack = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedBack(feedback.filter((item) => item.id !== id ))
    }
    console.log('App', id)
  }

  const addFeedBack = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedBack([...feedback, newFeedback])
  }

  return (
    <>
      <Header text="FeedBack UI"/>
      <div className ="container">
        <FeedbackForm handleAdd={addFeedBack}  />
        <FeedBackStats data={feedback} />
        <FeedBackList data={feedback} 
        handleDelete={deleteFeedBack}/>
      </div>
    </>
  )
}

export default App