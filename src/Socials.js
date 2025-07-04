import urlList from "./urlList.json"

export function SocialsContent() {

    var socialList = urlList.sites.map((site, index) => (
        <li key={index}>
            <a href={site.url} target="_blank" rel="noreferrer">
                <img src={"/images/" + site.iconname} alt={site.iconname.slice(0, -4)}>
                </img>
            </a>
        </li>
    ))

    return (
        <ul className="socialList">
            {socialList}
        </ul>
    )
}