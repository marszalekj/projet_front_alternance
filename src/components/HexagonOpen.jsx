import Hexagon from '../assets/Hexagon.svg'

const HexagonOpen = (props) => {
    return (
        
        <li className="w-[250px] h-10 justify-start items-center gap-[17px] inline-flex hover:bg-gray-200 cursor-pointer ">
                     <img className="min-w-6 min-h-6 relative text-gray-600"  src={Hexagon} alt='icon hexagon'/>
                     <div className="text-gray-600 text-base font-normal leading-normal">{props.Menu.title}</div>
                    </li>
    )
}

export default HexagonOpen