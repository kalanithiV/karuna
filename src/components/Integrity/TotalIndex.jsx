export default function ({nextClick,sculptureList,TotalList,index}){
    return(
        <div className="img_detials">
        <button onClick={nextClick} >Next</button>

        <h3>{index + 1}of{sculptureList.length}</h3>
        <p>
            {TotalList.artist}</p>
        <img src={TotalList.url} />
    </div>

    )
}