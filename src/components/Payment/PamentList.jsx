export default function ({ carddate, expdate, imgae }) {
    return (
        <div className="part_vx">
            <p><img src={imgae} /></p>
            <div>
                <small>Visa: <span>{carddate}</span></small>
                <small>Exp.date:<span>{expdate}</span></small>
            </div>
        </div>
    )
}