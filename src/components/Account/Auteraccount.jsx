import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
export default function({websitelink,image,totol_account,name}){
    return(
    <div >
    {/* You can add your components or JSX elements here */}
    <div className='google_drive'>
        <div className="google_drivedetails">
            <span><img src={image} /> </span>
            <label>{name}<small>{websitelink}</small></label>
        </div>
        <p>{totol_account}</p>
        <div className="more_accounts">
            <MoreHorizTwoToneIcon />
        </div>
    </div>
</div>
    )
}