import PaymentList from "../../components/Payment/PamentList"
import Visa from '../../images/visa.png'
import Visa1 from '../../images/visa1.png'

export default function(){
    const AmountDetails = [{
        id: 1,
        carddate: "4291",
        expdate: "12/26",
        imgae:Visa
    },
    {
        id: 2,
        carddate: "5532",
        expdate: "09/26",
        imgae:Visa1

    }
    ]

    return(
        <>
         {AmountDetails.map((list,index )=> (
            <PaymentList expdate={list.expdate} carddate={list.carddate} key={index} imgae={list.imgae} />
    ))} 
    </>
    )
}