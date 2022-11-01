import React from "react";
import { styled } from "@mui/system";

const Separator = styled('div')({
    width: '95%',
    backgroundColor: '#72767d',
    height: '1px',
    position: 'relative',
    marginTop: '25px',
    marginBottom: '25px'
})

const DateLabel = styled('span')({
    backgroundColor: '#36393f',
    position: 'absolute',
    left: '45%',
    top: '-10px',
    color: '#72767d',
    padding: '0 5px',
    fontSize: '14px'
})

const DateSeparator = ({ date }) => {
    return (
        <Separator>
            <DateLabel>{date}</DateLabel>
        </Separator>
    )
}

export default DateSeparator