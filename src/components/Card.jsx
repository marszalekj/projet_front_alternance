import { Link } from "react-router-dom"

const Card = (props) => {
    return (
<div className="flex h-[134px] w-1/3  max-w-xs rounded-lg border border-gray-200 bg-gradient-to-tr from-teal-700 to-green-800 shadow">

<Link to={props.site.link} key={props.site.id}>

<img className="flex" src={props.site.cover} alt="cover image"/>

</Link>

</div>

    )
}

export default Card