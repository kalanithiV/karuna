
import "../payment-details/payment.css"
import CardInfo from "../../pages/payment-details/cardinfo"

export default function () {
 
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