import React from "react";
import { Button } from "@mui/material";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import './sidebar.scss'
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const Separator = styled('div')({
    width: '50%',
    backgroundColor: '#4F545C7A',
    height: '3px',
    position: 'relative',
    marginTop: '10px'
})

const FriendsButton = ({ friends }) => {

    const navigate = useNavigate()
    const handleClickRedirect = () => {
        navigate(`/conversations/${friends[0].id}`)
    }


    return (
        <>
        <Button
            onClick={handleClickRedirect}
            className="friends-sidebar-button"
            sx={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                maring: 0,
                padding: 0,
                minWidth: 0,
                marginTop: '10px',
                color: 'white',
                backgroundColor: '#36393F',
                '&:hover': {
                    backgroundColor: '#5865F2',
                    borderRadius: '16px'
                }
            }}
                >
            <SportsEsportsIcon style={{ fontSize: '32px'}}/>
        </Button>
        <Separator />
        </>
    )
}

const mapStoreStateToProps = ({ friends }) => {
    return {
        ...friends
    }
}

export default connect(mapStoreStateToProps)(FriendsButton)

