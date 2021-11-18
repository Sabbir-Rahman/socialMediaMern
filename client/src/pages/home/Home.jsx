import "./home.css"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Leftbar from "../../components/leftbar/Leftbar"


export default function Home(){

    return (
        <div>
           <div className="homeContainer">
              <Leftbar/>
              <Feed/>
              <Rightbar/> 
           </div>
        </div>
    )
}