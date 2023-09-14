import { useState } from "react"

{/* import Portrait from "../assets/Robert Brown.png" */}
import ChevronDroite from "../assets/chevron-double-right.svg"
import ChevronGauche from "../assets/chevron-double-left.svg"
import HexagonOpen from "./HexagonOpen"
import HexagonClosed from "./HexagonClosed"
import Moi from "../assets/moi.png"
import PCicon from "../assets/iconpc.png"
import Arobase from "../assets/arobase.png"



const SidebarClosed = () => {
    // initialisation de l'etat a false
    const [isopen, setisopen] = useState(false)
// gestion des evenements via operateur ternaire    
    const handleClick = () => {
        isopen ? setisopen(false) : setisopen(true)
    }

    const Menu1 = [
        { title: "Who am I", link:"Aboutme", img:Moi},
        { title: "My portfolio", link:"Portfolio", img:PCicon},
      ]
      const Menu2 = [
        
        { title: "Social", link:"Contact", img:Arobase},
      ]
return(

/*  condition ternaire: lorsque la sidebar est ouverte on augmente le w */

<div className= {` ${isopen ? 'w-[250px]' : 'w-[59px]'}  flex h-screen items-start justify-start bg-white duration-700`}>
    <div className={` ${isopen ? 'w-[250px] ' : 'w-[59px]'} inline-flex flex-col items-start justify-start gap-4 self-stretch pt-4 duration-700`}>
    <div className=" inline-flex items-start justify-start gap-2.5 pl-5 pt-5">
{/*  lorsque la sidebar est ouverte, affichage du texte */} 
            {isopen &&
    <p></p>
}
        </div>
        <div className="flex h-screen w-[59px] shrink grow basis-0 flex-col items-start justify-between gap-4 ">
            <div className="flex h-auto flex-col items-start justify-start gap-4 self-stretch">
                {isopen?  
                <ul className="flex h-auto flex-col items-start justify-start gap-4 pt-4 duration-700">
{/* utilisation de la méthode map pou afficher tous les menus de la sidebar*/} 
                <p className="inline-flex h-10 w-[250px] items-center justify-center gap-[17px] font-lato text-xl font-semibold italic ">ABOUT ME</p>

                {Menu1.map((Menu, index) => (
                     <HexagonOpen className="duration-700 " Menu={Menu} img={Menu.img} key={index}/>
                ))}                    

                </ul>
                
                :
                <ul className="flex h-auto flex-col items-start justify-start gap-4 pb-4">
                {Menu1.map((Menu, index) => (
                    <HexagonClosed className="duration-700" Menu={Menu} img={Menu.img} key={index}/>
                ))}                    
                </ul> 
                }
                {/* séparateur central */} 

                <div className={` ${isopen ? 'w-[250px]' : 'w-[59px]'} h-px bg-gray-200`} />
                {isopen?  
                <ul className="flex h-auto flex-col items-start justify-start gap-4 pt-4 duration-700">
                    <p className="inline-flex h-10 w-[250px] items-center justify-center gap-[17px] font-lato text-xl font-semibold italic">CONTACT ME</p>
                {Menu2.map((Menu, index) => (
                <HexagonOpen className="duration-700" Menu={Menu} img={Menu.img} key={index}/>
                 ))}                    
                </ul>
                
                :
                <ul className="flex h-auto flex-col items-start justify-start gap-4 pb-3 duration-700 ">
                {Menu2.map((Menu, index) => (
                 <HexagonClosed className="duration-700" Menu={Menu} img={Menu.img} key={index}/>
                ))}                    
                </ul> 
                }
            </div>
            <div className="flex h-[116px] flex-col items-start justify-end gap-2 self-stretch pb-4 pt-3">
            <div className="flex">                    
            <button className={` ${isopen ? 'w-[250px] justify-start gap-2.5 pl-5 duration-700' : 'w-[59px] justify-center py-2'} inline-flex h-10 items-center gap-[17px] duration-700`} type="button" onClick={() => handleClick()}>
                        {
                            isopen ? <img className="relative text-gray-600 duration-700" alt="chevron gauche" src={ChevronGauche } />
                            :<img className="relative text-gray-500 duration-700" alt="chevron droite" src={ChevronDroite} />

                        }
                    {isopen &&
                    <p className=" text-base font-normal leading-normal text-gray-600 duration-700">Menu</p>
                    }
            </button>
                </div>
                {/* 
                <div className={` ${isopen ? 'w-[250px] justify-start gap-2.5 pl-5' : 'w-[59px] justify-center py-2'} inline-flex h-10 items-center gap-[17px]`}>
                    <img className="relative h-6 w-6 rounded-[60px]" alt="Portrait" src={Portrait}/>
                    {isopen &&
                    <div className=" text-base font-normal leading-normal text-gray-600 duration-700">John Doe</div>
                    }
                </div>
                */}
            </div>
        </div>
    </div>
                {/* séparateur latéral */} 

    <div className="min-h-screen origin-top-left self-stretch border border-gray-200"></div>
</div>
)
}

export default SidebarClosed