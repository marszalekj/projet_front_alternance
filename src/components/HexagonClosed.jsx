import Hexagon from '../assets/Hexagon.svg'

const HexagonClosed = () => {
    return (
<li className="w-[59px] h-10 py-2 justify-center items-center gap-[17px] inline-flex hover:bg-gray-200 cursor-pointer ">
    <img className="min-w-6 min-h-6 relative text-gray-500"  src={Hexagon} alt='icon hexagon'/>
</li>
    )
}

export default HexagonClosed