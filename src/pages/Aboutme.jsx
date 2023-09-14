import Sidebar from "../components/Sidebar"
import Moi from "../assets/moi.png"
import Glitch from '../components/Glitch'
import JSlogo from '../assets/jslogo.png'
import Reactlogo from '../assets/reactlogo.png'
import Node from '../assets/nodelogo.png'
import Tailwind from '../assets/tailwindlogo.png'
import Golang from '../assets/gologo.png'
import Mongo from '../assets/mongologo.png'

const Aboutme = () => {
    return(
        <main className=" inline-flex h-screen w-screen items-start justify-start">
        <Sidebar/>
        <div className="relative flex h-screen w-screen flex-col items-center justify-start md:p-12">
        <img className="absolute right-20 top-20 h-40 w-40 rounded-full" src={Moi}/>
        <h1>Jérémy MARSZALEK</h1>
        <Glitch/>
        <p></p>
        <div className="flex flex-col p-24">
        <div className="flex h-64 w-64 justify-center gap-8">
        <h2>Technologies I&apos;ve worked with </h2>
        <img className="h-24 w-24" src={JSlogo}/>
        <img className="h-24 w-24" src={Reactlogo}/>
        <img className="h-24 w-24" src={Node}/>
        <img className="h-24 w-24" src={Mongo}/>
        <img className="h-24 w-24" src={Tailwind}/>
        </div>
        <div className="flex h-64 w-64 justify-center">
        <h2>Technologies I&apos;m discovering </h2>
        <img className="h-24 w-24" src={Golang}/>
        </div>
        </div>
        </div>
        </main>
    )
}

export default Aboutme