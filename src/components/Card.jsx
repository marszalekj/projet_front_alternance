import { Link } from "react-router-dom"

const Card = (props) => {
    return (
<div className="relative max-h-[90px] min-h-[60px] min-w-[120px] max-w-lg  rounded-lg border	border-gray-200 bg-gradient-to-tr from-teal-700 to-green-800 shadow lg:max-h-[140px] lg:max-w-sm">

<Link to={props.site.link} key={props.site.id}>

<p className="absolute text-white" >{props.site.description}</p>
<img className="flex h-full w-full rounded-lg border object-cover	" src={props.site.cover} alt="cover image"/>
<div className=' absolute left-0 top-0 h-full w-full rounded-lg bg-gradient-to-b from-transparent to-black/50'></div>

</Link>

</div>

    )
}

export default Card