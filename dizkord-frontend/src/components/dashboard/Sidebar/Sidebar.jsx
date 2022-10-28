import React from "react";
import { styled } from "@mui/system";
import MainButton from "./MainButton";
import './sidebar.scss'

const MainContainer = styled('div')({
    width: "80px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#202225"
})

const Sidebar = () => {
    return (
        <MainContainer>
            <MainButton />
        </MainContainer>
    )
}

export default Sidebar