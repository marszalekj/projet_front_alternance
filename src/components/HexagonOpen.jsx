import Hexagon from '../assets/Hexagon.svg'

const HexagonOpen = (props) => {
    return (
        
        <li className="inline-flex h-10 w-[250px] cursor-pointer items-center justify-start gap-[17px] hover:bg-gray-200 ">
                     <img className="relative text-gray-600"  src={Hexagon} alt='icon hexagon'/>
                     <div className="text-base font-normal leading-normal text-gray-600">{props.Menu.title}</div>
                    </li>
    )
}

export default HexagonOpen