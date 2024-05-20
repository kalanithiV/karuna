
import React from "react"
import "../payment-details/payment.css"
import CardInfo from "./cardinfo"

const paymentDetail:React.FC = ()=> {
 
    const update =()=>{
        alert("rrrrrr")
    }
    return (
        <div className="paymentCatagories">
            <div className="payment_deatails">
                <label>Payment methods<span>Edit</span></label>
                <CardInfo  />
                <button onClick={update}>Update payment method</button>
            </div>
        </div>

    )
}
export default paymentDetail