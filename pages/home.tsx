import NavBar from "./components/NavBar"
import Billboard from "./components/Billboard";
import '../styles/globals.css';


export default function Home() {
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <NavBar />
        <Billboard />
      </div>
    </div>
  )
}


