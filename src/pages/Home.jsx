import Card from "../components/Card";
import Sidebar from "../components/Sidebar";


const Home = () => {
    return(
        <main className=" w-screen h-screen justify-start items-start inline-flex">
        <Sidebar/>
        <div className="flex flex-wrap w-max h-auto px-8 py-4 gap-5">
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