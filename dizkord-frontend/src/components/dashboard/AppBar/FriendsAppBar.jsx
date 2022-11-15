import React from "react";
import { styled } from "@mui/system";
import ChosenOptionLabel from "./ChosenOptionLabel";
import { Button } from "@mui/material";
import VideocamIcon from '@mui/icons-material/Videocam';

const MainContainer = styled('div')({
    position: "absolute",
    right: '0',
    top: '0',
    height: '48px',
    width: 'calc(100% - 350px)',
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#36393f",
    borderBottom: '1px solid #1e2124',
    padding: '0 15px'
})

const FriendsAppBar = () => {
    return (
        <MainContainer>
            <ChosenOptionLabel />
            <Button>
                <VideocamIcon
                    sx={{
                        color: '#96989D',
                        '&:hover': {
                            color: 'white'
                        }
                    }}
                />
            </Button>
        </MainContainer>
    )
}

export default FriendsAppBar