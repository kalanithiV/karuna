
export default function ({ increment, count, decrement }) {
    return (
        <div className="Integrity">
            <h3>Increment Decrement </h3>
            <button onClick={increment}>+</button>  {count}
            <button onClick={decrement}>-</button>
        </div>
    )
}
