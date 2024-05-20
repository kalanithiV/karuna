
import React, { ChangeEvent, MouseEventHandler, RefObject } from 'react';

interface inputpropsdata {
    total: Array<{ name: string }>;
    Clickhere: MouseEventHandler<HTMLButtonElement>;
    totalChange: (event: ChangeEvent<HTMLInputElement>) => void;
    inputRef: RefObject<HTMLInputElement>;
    inputValue: string;
}

const AddInputData: React.FC<inputpropsdata> = ({
    total,
    Clickhere,
    totalChange,
    inputRef,
    inputValue
}) => {
    return (
        <div className="Add_inputData">
            <input type="text" value={inputValue} ref={inputRef} onChange={totalChange} />
            <button onClick={Clickhere}>Add</button>
            <ol>
                {total.map((list, index) => (
                    <li key={index}>
                        <p>{list.name}</p>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default AddInputData;
