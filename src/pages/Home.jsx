import Card from "../components/Card";
import Sidebar from "../components/Sidebar";


const Home = () => {
    return(
        <main className=" inline-flex h-screen w-screen items-start justify-start">
        <Sidebar/>
        <div className="flex h-screen w-screen flex-wrap content-start gap-4 px-8 py-4">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
    </main>
    )
}

export default Home