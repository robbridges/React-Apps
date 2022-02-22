import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Header from './components/Header';
import FeedBackList from './components/FeedBackList';
import FeedBackData from './data/FeedBackData';
import FeedBackStats from './components/FeedBackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import NotFound from './components/NotFound';

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
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedBack} />
                <FeedBackStats data={feedback} />
                <FeedBackList
                  data={feedback}
                  handleDelete={deleteFeedBack}
                />
                <AboutIconLink /> 
                
              </>
            }>

            </Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
        
      </div>
      
    </Router>
    
  )
}

export default App