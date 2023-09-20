import Sidebar from "../components/Sidebar"
import Moi from "../assets/moi.png"
import Glitch from '../components/Glitch'

import JSlogo from '../assets/jslogo.png'
import Reactlogo from '../assets/reactlogo.png'
import Node from '../assets/nodelogo.png'
import Tailwind from '../assets/tailwindlogo.png'
import Nextjs from "../assets/nextjslogo.png"
import Golang from '../assets/gologo.png'
import Mongo from '../assets/mongologo.png'
import Typescript from '../assets/typescriptlogo.png'
import Solidity from '../assets/soliditylogo.png'
import Rust from '../assets/rustlogo.png'

const Aboutme = () => {
  return(
    <main className=" inline-flex h-screen w-screen items-start justify-start">
      <Sidebar/>
      <div className="relative flex h-screen w-screen flex-col items-center justify-start md:p-12">
        <img className="absolute right-80 top-14 h-40 w-40 rounded-full" src={Moi}/>
        <h1 className="text-xl">Jérémy MARSZALEK</h1>
        <div className="mt-12">
          <Glitch/>
        </div>
        <div className="flex flex-col pt-14">
          <h2 className="animate-text bg-gradient-to-r from-black via-slate-500 to-black bg-clip-text  pl-28 pr-80 text-start text-xl font-medium text-transparent">
        Hello world ! <br/> My name is Jérémy, a french guy living between Toulouse and Barcelona. After a <b>Master&apos;s degree in Digital Law</b> (Toulouse Capitole University) and <b>5 years in Data Privacy</b> field in Paris (as consultant in Financial Services and DPO in health sector), I completed a 9-month training course in 2023 to become a developer and am currently looking for <b>my first opportunity</b> as dev.
          </h2>

          <div className="mt-8 flex h-28 w-screen items-center justify-center gap-x-8">
            <h2 className="max-w-[250px] animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black text-lg text-black">Technologies I&apos;ve worked with </h2>
            <img className="h-20 w-20"  src={JSlogo}/>
            <img className="h-20 w-20 "  src={Reactlogo}/>
            <img className="h-20 w-20 "  src={Node}/>
            <img className="h-20 w-20 "  src={Nextjs}/>
            <img className="h-20 w-20 "  src={Mongo}/>
            <img className="h-20 w-20 "  src={Tailwind}/>
          </div>
          <div className="flex h-28 w-screen items-center justify-center gap-x-8">
            <h2 className=" max-w-[240px] animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black text-lg text-black">Technologies I&apos;m discovering </h2>
            <img className="h-20 w-20 " src={Golang}/>
            <img className="h-20 w-20 "  src={Typescript}/>
          </div>
          <div className="flex h-28 w-screen items-center justify-center gap-x-8">
            <h2 className="max-w-[410px] animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black text-lg text-black">Technologies I plan to master in the next few years </h2>
            <img className="h-20 w-20 "  src={Solidity}/>
            <img className="h-20 w-20 "  src={Rust}/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Aboutme