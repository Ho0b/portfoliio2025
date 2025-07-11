import "./App.css"
import {Link} from "react-router-dom"

export function ContactMeButton(){
    return(
        <Link to={"/contact"}><button>Let's Connect!</button></Link>
    )
}

export function AboutMeButton(){
    return(
        <Link to={"/about"}><button>About</button></Link>
    )
}

export function BackArrow(){
    return (
        <div id="backArrowContainer">
            <Link to={"/"} id="leftBackArrow">
        </Link>
        </div>
        
    )
}

export function HomeButton(){
    return(
        <Link to={"/"}><button>Home</button></Link>
    )
}
