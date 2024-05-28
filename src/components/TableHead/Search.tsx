import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

const Search: React.FC = () => {
    return (
        <>
            <div className="search_icon">
                <SearchTwoToneIcon />
            </div>
            <div className="top_details">
                <TextField id="outlined-basic" label="Search" variant="outlined" size="small" />
                <label>
                    <NotificationsNoneTwoToneIcon />
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </label>
            </div>
        </>
    );
};

export default Search;
