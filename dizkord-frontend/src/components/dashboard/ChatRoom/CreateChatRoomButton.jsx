import { Button } from "@mui/material";
import VideocamIcon from '@mui/icons-material/Videocam';
import * as chatRoomHandler from '../../../realtimeCommunication/chatRoomHandler'


const CreateChatRoomButton = () => {

    const createNewChatRoomHandler = () => {
        // Change store state to indicate user is in room
        chatRoomHandler.createNewChatRoom()
    }

    return (
        <Button
            onClick={createNewChatRoomHandler}
        >
            <VideocamIcon
                sx={{
                    color: '#96989D',
                    '&:hover': {
                        color: 'white'
                    }
                }}
            />
        </Button>
    )
}

export default CreateChatRoomButton