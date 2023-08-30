import Hexagon from '../assets/Hexagon.svg'

const HexagonClosed = () => {
    return (
<li className="inline-flex h-10 w-[59px] cursor-pointer items-center justify-center gap-[17px] py-2 hover:bg-gray-200 ">
    <img className=" relative text-gray-500"  src={Hexagon} alt='icon hexagon'/>
</li>
    )
}

export default HexagonClosed