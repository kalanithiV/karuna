import React from 'react';

interface integrityProps {
    increment: () => void;
    count: number;
    decrement: () => void;
}

const Integrity: React.FC<integrityProps> = ({ increment, count, decrement }) => {
    return (
        <div className="Integrity">
            <h3>Increment Decrement</h3>
            <button onClick={increment}>+</button> {count}
            <button onClick={decrement}>-</button>
        </div>
    );
};

export default Integrity;
