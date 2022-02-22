import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

const AboutPage = () => {
  return (

    <Card> 
      <div className="About">
        <h1>About</h1>
        <p>This is a react app to leave feedback for a product</p>
        <p>Version: 1</p>

        <Link to="/">Back to Home</Link>
      </div>
    </Card>
  )
}

export default AboutPage;