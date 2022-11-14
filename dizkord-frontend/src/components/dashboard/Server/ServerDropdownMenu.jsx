import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import AddChannelDialog from "../ChannelsSideBar/AddChannelDialog";
import InviteToServerDialog from './InviteToServerDialog';

// This will get called in the ChannelsBarHeader component but related to Server things
// So putting in Servers folder
const ServerDropdownMenu = () => {

    // ----------- Functions to open/close the dropdown menu ----------
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleMenuOpen = (event) => { setAnchorEl(event.currentTarget) }
    const handleMenuClose = () => { setAnchorEl(null) }

    // ----------- Functions to open/close the create channel dialog ----------
    const [isChannelDialogOpen, setIsChannelDialogOpen] = useState(false)
    const handleOpenAddChannelDialog = () => { setIsChannelDialogOpen(true) }
    const handleCloseAddServerDialog = () => { setIsChannelDialogOpen(false) }

    // ----------- Functions to open/close the invite user dialog ----------
    const [isInviteServerDialogOpen, setIsInviteServerDialogOpen] = useState(false)
    const openInviteToServerDialog = () => { setIsInviteServerDialogOpen(true) }
    const closeInviteToServerDialog = () => { setIsInviteServerDialogOpen(false) }

    return (
        <>
            <IconButton
                onClick={handleMenuOpen}
                sx={{
                    height: '48px',
                    color: '#8e9297'
                }}
            >
                <KeyboardArrowDownIcon />
            </IconButton>
            <Menu
                id="server-dropdown-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                MenuListProps= {{
                    'aria-labelledby': 'basic-button',
                }}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                PaperProps={{
                    sx: {
                        position: 'relative',
                        marginTop: '10px',
                        width: '215px',
                        backgroundColor: 'black',
                        paddingLeft: '5px',
                        paddingRight: '5px'
                    }
                }}
            >
                <MenuItem 
                    onClick={openInviteToServerDialog}
                    sx={{ 
                        color: '#949CF7', 
                        fontSize: '15px',
                        borderRadius: '2px', 
                        '&:hover': { backgroundColor: '#5865F2', color: 'white'} }}
                >
                    Invite People
                </MenuItem>
                <MenuItem 
                    onClick={handleOpenAddChannelDialog}
                    sx={{
                        color: '#B9BBBE',
                        fontSize: '15px',
                        borderRadius: '2px',
                        '&:hover': { backgroundColor: '#5865F2', color: 'white' }
                }}
                >
                    Create Channel
                </MenuItem>
                <MenuItem sx={{
                    color: '#B9BBBE',
                    fontSize: '15px',
                    borderRadius: '2px',
                    '&:hover': { backgroundColor: '#5865F2', color: 'white' }
                }}>
                    Edit Server Profile
                </MenuItem>
            </Menu>

            <AddChannelDialog
                isDialogOpen={isChannelDialogOpen}
                closeDialogHandler={handleCloseAddServerDialog}
            />
            <InviteToServerDialog 
                isDialogOpen={isInviteServerDialogOpen}
                closeDialogHandler={closeInviteToServerDialog}
            />
        </>
    )
}

export default ServerDropdownMenu