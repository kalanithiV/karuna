// import '../pages/AccountDetails/account.css';
import "../AcountDeatils/account.css"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Search from '../../components/TableHead/search'
import Account from "../../components/Account/account"
import Microsoftimg from "../../images/drive.png"
import Insta from "../../images/instagram.png"
import Drive from "../../images/drive.png"
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const drivedetails = [{
    id: 1,
    name: "GoogleDrive",
    websitelink: "www.googledrive.com",
    totol_account: "4",
    image:Drive 

},
{
    id: 2,
    name: "Instagram",
    websitelink: "instagram.com",
    totol_account: "2",
    image:Insta 

},
{

    id: 3,
    name: "Microsoft",
    websitelink: "microsoft.com",
    totol_account: "5",
    image:Microsoftimg 


}
]

export default function () {

    return (
        <div className="Account_details ">
            <div className="constainer">
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <Grid container spacing={2} className="justify_account">
                            <Grid item xs={6} >
                                <Item>
                                        <Search />
                                        <Account  drivedetails={drivedetails} />
                                </Item>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </div>

        </div>
    )
}