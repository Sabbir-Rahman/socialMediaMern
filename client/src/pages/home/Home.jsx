import "./home.css"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Leftbar from "../../components/leftbar/Leftbar"
import Topbar from "../../components/topbar/Topbar"

export default function Home(){

    return (
        <>
        <Topbar/>
           <div className="homeContainer">
              <Leftbar/>
              <Feed/>
              <Rightbar/> 
           </div>
        </>
    )
}