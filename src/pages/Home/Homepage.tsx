import React from "react"
import Button from "../../components/Buttons/Freetrail"
import SocialMedais from "../../components/Buttons/SocialMedia"
import "../Home/home.css"
import Integrateimg from "../../images/integrate.png"


const homepage:React.FC=()=>{
    return (
        <div className="homepage">
            <div className="integrate_stack">
                <p>Integrate Your <br></br>
                    stack - automate <br></br>your work</p>
                <small>Evolve at the speed and scale of your business<br></br>with the leader in low-code automation</small>
                <Button />
                <SocialMedais />
            </div>
            <div className="integrate_img">
                <img src={Integrateimg} />
            </div>

        </div>
    )
}
export default homepage