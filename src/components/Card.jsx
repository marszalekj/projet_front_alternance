import { Link } from "react-router-dom"

const Card = (props) => {
  return (
    <div className="relative max-h-[120px] min-h-[60px] min-w-[20px] max-w-lg  rounded-lg border	border-gray-200 bg-gradient-to-tr from-teal-700 to-black shadow duration-300 hover:scale-110 hover:opacity-80 md:max-h-[160px] md:max-w-xs lg:max-h-[220px] lg:max-w-sm">

      <Link to={props.site.link} key={props.site.id} target="_blank" rel="noopener noreferrer">

        <p className="absolute inset-x-0 bottom-0 h-1/3 w-full rounded-b-lg bg-black/60 p-2	text-center	 font-lato text-lg text-white" >{props.site.description}</p>
        <img className="flex h-full w-full rounded-lg border object-cover	" src={props.site.cover} alt="cover image"/>
        <div className=' absolute left-0 top-0 h-full w-full rounded-lg bg-gradient-to-b from-transparent to-black/50'></div>

      </Link>

    </div>

  )
}

export default Card