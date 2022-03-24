import React from 'react'
import './Header.css'
import {Avatar} from "@material-ui/core"
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from './StateProvider';
function Header() {

    const [{user}] = useStateValue(); 
    return (

        <div className="header">
            <div className="header_left">
                <Avatar
                className="header_avatar"
                alt={user?.displayName}
                src={user?.photoURL}
                // alt='Manthan Khubchandani'
                // src=''
                />
                <AccessTimeIcon />
            </div>
            <div class="header_search">
                <SearchIcon />
                <input placeholder="Search..." />

            </div>
            <div class="header_right">
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header
