import React from "react";
import { styled } from "@mui/system";
import DropdownMenu from "./DropdownMenu";
import ChosenOptionLabel from "./ChosenOptionLabel"

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

const AppBar = () => {
    return (
        <MainContainer>
            <ChosenOptionLabel />
            <DropdownMenu />
        </MainContainer>
    )
}

export default AppBar