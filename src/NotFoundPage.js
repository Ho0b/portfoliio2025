import {Link} from "react-router-dom";
import './App.css'

function NotFoundPage(){
    return(
        <section>
            <div className="center_flex_black">
            <h1 id="errorStatus">404 ERROR!</h1>
            <p className="txt_center">the page you were trying to reach does not exist, click this button to go home</p>
            <Link to={"/"}><button className="aboutPage">Home</button></Link>
            </div>
        </section>
        
    )
}

export default NotFoundPage