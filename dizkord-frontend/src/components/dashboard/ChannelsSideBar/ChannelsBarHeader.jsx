import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import ServerDropdownMenu from "../Server/ServerDropdownMenu";

const MainContainer = styled('div')({
    height: '48px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    verticalAlign: 'middle',
    alignItem: 'center',
    borderBottom: '1px solid #1e2124',
    padding: '0 15px',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#4f545c99',
    }
})

const ChannelsBarHeader = ({ serverName }) => {
    return (
        <MainContainer>
            <Typography
                sx={{
                    color: 'white',
                    lineHeight: '48px',
                    fontWeight: 700,
                    marginLeft: '5px',
                    fontSize: '15px'
                }}
            >{serverName}</Typography>
            {/* <KeyboardArrowDownIcon
                sx={{
                    height: '48px',
                    color: '#8e9297'
                }}
            /> */}
            <ServerDropdownMenu />
        </MainContainer>
    )
}

export default ChannelsBarHeader