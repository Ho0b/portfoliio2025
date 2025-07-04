import "./App.css"
import {Link} from "react-router-dom"
import { setDisableSections } from "./App"

export function ContactMeButton(){
    return(
        <Link to={"/contact"}><button onClick={()=>(setDisableSections)}>Let's Connect!</button></Link>
    )
}

export function AboutMeButton(){
    return(
        <Link to={"/about"}><button onClick={()=>(setDisableSections)}>About</button></Link>
    )
}

