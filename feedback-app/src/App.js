
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import FeedBackList from './components/FeedBackList';
import FeedBackStats from './components/FeedBackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import { FeedBackProvider } from './context/FeedBackContext';
import AboutIconLink from './components/AboutIconLink';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <FeedBackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm/>
                  <FeedBackStats/>
                  <FeedBackList/>
                  <AboutIconLink /> 
                  
                </>
              }>
            </Route>
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </FeedBackProvider>
    
  )
}

export default App