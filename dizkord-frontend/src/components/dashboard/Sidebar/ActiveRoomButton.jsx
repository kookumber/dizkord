import React from "react";
import { Tooltip, Button } from "@mui/material";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { styled } from "@mui/system";
import * as chatRoomHandler from '../../../realtimeCommunication/chatRoomHandler'

// const Separator = styled('div')({
//     width: '50%',
//     backgroundColor: '#4F545C7A',
//     height: '3px',
//     position: 'relative',
//     marginTop: '10px'
// })

const ActiveRoomButton = ({ roomId,
    creatorUsername,
    numberOfParticipants,
    isUserInRoom
}) => {

    const handleJoinActiveRoom = () => {
        if (numberOfParticipants < 4) {
            chatRoomHandler.joinChatRoom(roomId)
        }

    }
    const activeRoomButtonDisabled = numberOfParticipants > 3
    const roomTitle =  `Creator: ${creatorUsername}. Connected: ${numberOfParticipants}`

    return (
        <>
            <Tooltip title={roomTitle}>
                <div>
                <Button
                    disabled={activeRoomButtonDisabled || isUserInRoom}
                    onClick={handleJoinActiveRoom}
                    sx={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        // margin: 0,
                        padding: 0,
                        minWidth: 0,
                        marginTop: '10px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        backgroundColor: '#36393F',
                        color: '#DCDDDE',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        fontSize: '16px',
                        '&:hover': {
                            backgroundColor: '#5865F2',
                            color: 'white',
                            borderRadius: '14px'
                        }
                    }}
                >
                    <SportsEsportsIcon style={{ fontSize: '32px' }} />
                </Button>
                </div>
            </Tooltip>
            {/* <Separator /> */}
        </>
    )
}


export default ActiveRoomButton

