export default function ({ showmoew, clickShow, TotalList ,sculptureList}) {
    return (
        <div className="More_detials">
            <button onClick={clickShow} >{showmoew ? "hide" : "more"}Details</button>
            {
                showmoew ?
                    <>
                        <p>{TotalList.description}</p>
                        <img src={TotalList.url} />
                    </> 
                    : ""

            }
            <ul className="fetch_Data">

                {
                    sculptureList.map((list, index) => (
                        <li key={index} style={{ textAlign: "start", lineHeight: "30px" }}>{list.description}</li>
                    ))
                }

            </ul>
        </div>
    )
}