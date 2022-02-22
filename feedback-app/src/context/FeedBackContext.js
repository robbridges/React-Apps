import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid';

const FeedBackContext = createContext();

export const FeedBackProvider = ({children}) => {
  const [feedBack, setFeedBack] = useState([
    {
      id: 1,
      text: 'Great Service, they gave me an extra goldfish they had lying around',
      rating: 10,
    },
    {
      id: 2,
      text: 'Terrible service, they lost my gold fish',
      rating: 4,
    },
    {
      id: 3,
      text: `I'm not sure what this business is even here for, but they paid me 20 bucks for a good review... so`,
      rating: 10,
    },
  ])

  const [feedBackEdit, setFeedBackEdit] = useState({
    item: {},
    edit: false,
  })

  const editFeedBack = (item) => {
    setFeedBackEdit({
      item,
      edit: true,
    })
  }

  const deleteFeedBack = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedBack(feedBack.filter((item) => item.id !== id ))
    }
    console.log('App', id)
  }

  const addFeedBack = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedBack([...feedBack, newFeedback])
  }

  const updateFeedBack = (id,updItem) => {
    setFeedBack(
        feedBack.map((item) => (item.id === id ? {...item, ...updItem} : item))
    )
  }

  return ( <FeedBackContext.Provider value={{
    feedBack,
    deleteFeedBack,
    addFeedBack,
    editFeedBack,
    feedBackEdit,
    updateFeedBack
  }}>
    {children}
  </FeedBackContext.Provider>
  )
}

export default FeedBackContext;

