import Hexagon from '../assets/Hexagon.svg'
import { Link } from 'react-router-dom'

const HexagonOpen = (props) => {
    return (
        <Link to={`/`+ props.Menu.link}>
        <li className="inline-flex h-10 w-[250px] cursor-pointer items-center justify-start gap-[17px] duration-300 hover:scale-110">
                     <img className="relative text-gray-600"  src={Hexagon} alt='icon hexagon'/>
                     <div className="font-lato text-xl leading-normal text-gray-600">{props.Menu.title}</div>
        </li>
        </Link>
    )
}

export default HexagonOpen