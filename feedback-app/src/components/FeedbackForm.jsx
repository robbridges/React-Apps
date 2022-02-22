import { useState, useContext, useEffect } from "react";
import FeedBackContext from "../context/FeedBackContext";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingsSelect from "./RatingsSelect";

const FeedbackForm = () => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const {addFeedBack, feedBackEdit, updateFeedBack} = useContext(FeedBackContext);

  useEffect(() => {
    if (feedBackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedBackEdit.item.text);
      setRating(feedBackEdit.item.rating);
    }
  }, [feedBackEdit])

  const handleTextChange = (e) => {
    if (text ==='') {
      setBtnDisabled(true);
      setMessage(null);
    } else if(text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Review text must be 10 characters')
    } else {
      setBtnDisabled(false);
      setMessage(null)
    }

    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim().length > 10) {
      const newFeedBack = {
        text,
        rating,
      }
      if (feedBackEdit.edit === true) {
        updateFeedBack(feedBackEdit.item.id, newFeedBack)
      } else {
        addFeedBack(newFeedBack);
      }
      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your experience with us?</h2>
        <RatingsSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input 
          onChange={handleTextChange} 
          type="text" 
          placeholder="Write a review"
          value={text} 
          />
          <Button type='submit' isDisabled={btnDisabled}>Send</Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm