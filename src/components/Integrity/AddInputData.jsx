export default function({total,Clickhere,totalChange,inputRef,inputValue}){
    return(
        <div className="Add_inputData">

        <input type="text" value={inputValue} ref={inputRef} onChange={totalChange} />

        <button onClick={Clickhere} >Add</button>
        <ol>
        {
          
            total.map((list, index) => (
                <li key={index}>
                    <p>{list.name}</p>
                </li>
            ))
        }
        {/* {
            total[0].name
        } */}
        </ol>

    </div>
    )
}