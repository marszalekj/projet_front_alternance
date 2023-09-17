import { Link } from "react-router-dom"

const HexagonClosed = (props) => {
  return (
    <Link to={`/`+ props.Menu.link}>

      <li className="inline-flex h-10 w-[59px] cursor-pointer items-center justify-center gap-[17px] py-2 hover:bg-gray-200 ">
        <img className=" h-8 w-8"  src={props.img} alt='icon hexagon'/>
      </li>
    </Link>
  )
}

export default HexagonClosed