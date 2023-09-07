import Sidebar from "../components/Sidebar"
import Logolinkedin from "../assets/logolinkedin.png"
import Logogit from "../assets/logogit.png"
import Logotwitch from "../assets/logotwitch.png"

const Social = () => {
    return(
        <main className=" inline-flex h-screen w-screen items-start justify-start">
        <Sidebar/>
        <div className="flex h-screen w-screen flex-col items-center justify-center md:p-6">
        <a href="https://www.linkedin.com/in/jeremy-m/" target="_blank" rel="noopener noreferrer"><img className="w-72 duration-300 hover:scale-110 " src={Logolinkedin} alt="Logo Linkedin"/></a>
        <a href="https://github.com/marszalekj" target="_blank" rel="noopener noreferrer"><img className="w-72 transition duration-300 hover:scale-110 " src={Logogit} alt="Logo Github"/></a>
        <p className="flex pb-6 text-center font-lato text-lg md:text-lg ">You can also find me on Twitch, where I stream myself coding,<br/> an exercise that allows me to follow my progress and get advice from other developers</p>
        <a href="https://www.twitch.tv/marzacode" target="_blank" rel="noopener noreferrer"><img className="w-72 transition duration-300 hover:scale-110 " src={Logotwitch} alt="Logo Twitch"/></a>
        </div>
    </main>
    )
}

export default Social