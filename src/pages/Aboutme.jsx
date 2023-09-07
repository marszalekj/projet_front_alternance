import Sidebar from "../components/Sidebar"

const Aboutme = () => {
    return(
        <main className=" inline-flex h-screen w-screen items-start justify-start">
        <Sidebar/>
        <div className="flex h-screen w-screen flex-col items-center justify-start md:p-6">
        <h1>Jérémy MARSZALEK</h1>
        <p>From law to code</p>
        </div>
        </main>
    )
}

export default Aboutme