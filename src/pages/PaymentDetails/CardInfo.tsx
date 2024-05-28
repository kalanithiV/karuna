import React from 'react';
import PaymentList from "../../components/Payment/PamentList";
import Visa from '../../images/visa.png';
import Visa1 from '../../images/visa1.png';

interface CardInfo {
    id: number;
    carddate: string;
    expdate: string;
    image: string; // corrected from 'imgae' to 'image'
}

const CardInfoComponent: React.FC = () => {
    const amountDetails: CardInfo[] = [
        {
            id: 1,
            carddate: "4291",
            expdate: "12/26",
            image: Visa
        },
        {
            id: 2,
            carddate: "5532",
            expdate: "09/26",
            image: Visa1
        }
    ];

    return (
        <>
            {amountDetails.map((list) => (
                <PaymentList 
                    expdate={list.expdate} 
                    carddate={list.carddate} 
                    key={list.id} 
                    image={list.image} // corrected from 'imgae' to 'image'
                />
            ))}
        </>
    );
}

export default CardInfoComponent;
