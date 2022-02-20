import { useState } from 'react';
import Header from './components/Header';
import FeedBackList from './components/FeedBackList';
import FeedBackData from './data/FeedBackData';
import FeedBackStats from './components/FeedBackStats';

const App = () => {
  const [feedback, setFeedBack] = useState(FeedBackData)
  
  const deleteFeedBack = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedBack(feedback.filter((item) => item.id !== id ))
    }
    console.log('App', id)
  }

  return (
    <>
      <Header text="Hello World"/>
      <div className ="container">
        <FeedBackStats data={feedback} />
        <FeedBackList data={feedback} handleDelete={deleteFeedBack}/>
      </div>
    </>
  )
}

export default App