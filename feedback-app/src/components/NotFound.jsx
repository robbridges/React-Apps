import { Link } from "react-router-dom"
import Card from "./shared/Card"

const NotFound = () => {
  return (
    <Card>
      <p>Sorry there is no page here.</p>
      <Link to={"/"}>Take me Back!</Link>
    </Card>
  )
}

export default NotFound