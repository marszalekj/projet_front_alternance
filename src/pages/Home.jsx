import Card from "../components/Card";
import Sidebar from "../components/Sidebar";

import Sites from "../Sites.json"


const Home = () => {
  return(
    <main className=" inline-flex h-screen w-screen items-start justify-start">
      <Sidebar/>
      <div className="flex h-screen w-screen flex-col justify-center gap-8 p-4 md:p-8">
        <h1 className="flex justify-center font-lato text-4xl font-bold ">My portfolio</h1>
        <div className=" flex  flex-wrap justify-center gap-12 ">
          {
            Sites.map((site) => (
              <Card key={site.id} site={site}/>
            ))
          }
        </div>  
      </div>
    </main>
  )
}

export default Home