
import { createContext, useState, useEffect } from "react";


const FeedBackContext = createContext();

export const FeedBackProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedBack, setFeedBack] = useState([])
  const [feedBackEdit, setFeedBackEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchFeedBack()
  }, [])

  const fetchFeedBack = async () => {
    const response = await fetch("/feedback?_sort=id&_order=desc")
    const data = await response.json();
    setFeedBack(data);
    setIsLoading(false);
  }

  const editFeedBack = (item) => {
    setFeedBackEdit({
      item,
      edit: true,
    })
  }

  const deleteFeedBack = async (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      await fetch(`/feedback/${id}`, {
        method: 'DELETE',
      })
      setFeedBack(feedBack.filter((item) => item.id !== id ))
    }
    
  }

  const addFeedBack = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newFeedback)
    })
    const data = await response.json()
    setFeedBack([...feedBack, data])
  }

  const updateFeedBack =async (id,updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updItem),
    })

    const data = await response.json()
    setFeedBack(
        feedBack.map((item) => (item.id === id ? {...item, ...data} : item))
    )
  }

  return ( <FeedBackContext.Provider value={{
    feedBack,
    deleteFeedBack,
    addFeedBack,
    editFeedBack,
    feedBackEdit,
    updateFeedBack,
    isLoading
  }}>
    {children}
  </FeedBackContext.Provider>
  )
}

export default FeedBackContext;

