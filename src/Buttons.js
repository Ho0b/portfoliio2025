import "./App.css"
import {Link} from "react-router-dom"

export function ContactMeButton(){
    return(
        <Link to={"/contact"}><button className='aboutPage'>Let's Connect!</button></Link>
    )
}
