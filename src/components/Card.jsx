import { Link } from "react-router-dom"

const Card = (props) => {
    return (
<div className="relative max-h-[120px] min-h-[60px] min-w-[120px] max-w-lg  rounded-lg border	border-gray-200 bg-gradient-to-tr from-teal-700 to-black shadow md:max-h-[160px]  md:max-w-xs lg:max-h-[220px] lg:max-w-sm">

<Link to={props.site.link} key={props.site.id}>

<p className="absolute inset-x-0 bottom-0 h-1/3 w-full rounded-b-lg bg-black/60 px-2	py-2	 text-center text-lg font-bold text-white" >{props.site.description}</p>
<img className="flex h-full w-full rounded-lg border object-cover	" src={props.site.cover} alt="cover image"/>
<div className=' absolute left-0 top-0 h-full w-full rounded-lg bg-gradient-to-b from-transparent to-black/50'></div>

</Link>

</div>

    )
}

export default Card