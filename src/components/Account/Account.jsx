import Microsoftimg from "../../images/drive.png"
import Insta from "../../images/instagram.png"
import Drive from "../../images/drive.png"
import Accounts from "../Account/Auteraccount"
// import  Microsoft  from "@mui/icons-material";
export default function Account({drivedetails}) {
    return (
        <>
            <div className='Accounts'>
                <label>Accounts</label>
            </div>
            <div className='socialmedia'>
                {drivedetails.map((items, index) => (
                      <Accounts name={items.name} websitelink={items.websitelink} totol_account={items.totol_account} image={items.image} key={index}/>     
                ))}
            </div>
        </>
    )
}