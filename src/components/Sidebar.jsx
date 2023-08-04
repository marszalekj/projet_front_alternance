import { useState } from "react"

import Logo from "../assets/Logo.svg"
import Portrait from "../assets/Robert Brown.png"
import ChevronDroite from "../assets/chevron-double-right.svg"
import ChevronGauche from "../assets/chevron-double-left.svg"
import Sapiologie from "../assets/Sapiologie.svg"
import HexagonOpen from "./HexagonOpen"
import HexagonClosed from "./HexagonClosed"




const SidebarClosed = () => {
    // initialisation de l'etat a false
    const [isVisible, setIsVisible] = useState(false)
// gestion des evenements via operateur ternaire    
    const handleClick = () => {
        isVisible ? setIsVisible(false) : setIsVisible(true)
    }

    const Menu1 = [
        { title: "Dashboard"},
        { title: "Statistiques"},
        { title: "Indices"},
        { title: "Recommendations"},
      ]
      const Menu2 = [
        { title: "Compte"},
        { title: "Parametres"},
        { title: "Nouveautés"},
      ]
return(

/*  condition ternaire: lorsque la sidebar est ouverte on augmente le w */

<div className= {` ${isVisible ? 'w-[250px] duration-300' : 'w-[59px]'} h-screen bg-white justify-start items-start flex`}>
    <div className={` ${isVisible ? 'w-[250px] duration-300' : 'w-[59px]'} self-stretch pt-4 flex-col justify-start items-start gap-4 inline-flex`}>
    <div className=" pl-5 pt-5 justify-start items-start gap-2.5 inline-flex">
            <img className="min-w-6 min-h-6 relative" alt="logo" src={Logo} />
{/*  lorsque la sidebar est ouverte, affichage du texte */} 
            {isVisible &&
            <img className="text-gray-900 text-2xl font-bold leading-9 duration-300" alt="logo" src={Sapiologie}/>
            }
        </div>
        <div className="w-[59px] h-screen grow shrink basis-0 flex-col justify-between items-start gap-4 flex">
            <div className="self-stretch h-auto flex-col justify-start items-start gap-4 flex">
                {isVisible?  
                <ul className="h-auto pt-4 flex-col justify-start items-start gap-4 flex duration-300">
{/* utilisation de la méthode map pou afficher tous les menus de la sidebar*/} 

                {Menu1.map((Menu) => (
                     <HexagonOpen Menu={Menu}/>
                ))}                    

                </ul>
                
                :
                <ul className="h-auto pb-4 flex-col justify-start items-start gap-4 flex">
                {Menu1.map((Menu) => (
                    <HexagonClosed/>
                ))}                    
                </ul> 
                }
                {/* séparateur central */} 

                <div className={` ${isVisible ? 'w-[250px]' : 'w-[59px]'} h-px bg-gray-200`} />
                {isVisible?  
                <ul className="h-auto pt-4 flex-col justify-start items-start gap-4 flex duration-300">
                {Menu2.map((Menu, index) => (
                <HexagonOpen Menu={Menu}/>
                 ))}                    
                </ul>
                
                :
                <ul className="h-auto pb-3 flex-col justify-start items-start gap-4 flex">
                {Menu2.map((Menu, index) => (
                 <HexagonClosed/>
                ))}                    
                </ul> 
                }
            </div>
            <div className="self-stretch h-[116px] pt-3 pb-4 flex-col justify-end items-start gap-2 flex">
            <div className="flex">                    
            <button className={` ${isVisible ? 'w-[250px] pl-5 gap-2.5 justify-start duration-300' : 'w-[59px] justify-center py-2'} h-10 items-center gap-[17px] inline-flex`} type="button" onClick={() => handleClick()}>
                        {
                            isVisible ? <img className="min-w-6 min-h-6 relative text-gray-600 duration-300" alt="chevron gauche" src={ChevronGauche } />
                            :<img className="min-w-6 min-h-6 relative text-gray-500 " alt="chevron droite" src={ChevronDroite} />

                        }
                    {isVisible &&
                    <p className=" text-gray-600 text-base font-normal leading-normal duration-300">Collapse</p>
                    }
                    </button>
                </div>
                <div className={` ${isVisible ? 'w-[250px] pl-5 gap-2.5 justify-start' : 'w-[59px] justify-center py-2'} h-10 items-center gap-[17px] inline-flex`}>
                    <img className="w-6 h-6 relative rounded-[60px]" alt="Portrait" src={Portrait}/>
                    {isVisible &&
                    <div className=" text-gray-600 text-base font-normal leading-normal duration-300">John Doe</div>
                    }
                </div>
            </div>
        </div>
    </div>
                {/* séparateur latéral */} 

    <div className="h-screen self-stretch origin-top-left border border-gray-200"></div>
</div>
)
}

export default SidebarClosed