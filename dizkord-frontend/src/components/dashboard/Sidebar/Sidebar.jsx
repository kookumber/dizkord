import React from "react";
import { styled } from "@mui/system";
import MainButton from "./MainButton";
import AddServerButton from "../Server/AddServerButton";
import './sidebar.scss'
import ServerList from "../Server/ServerList/ServerList";

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
            <ServerList />
            <AddServerButton />
        </MainContainer>
    )
}

export default Sidebar