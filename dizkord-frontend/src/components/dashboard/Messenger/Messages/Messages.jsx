import React from "react";
import { styled } from "@mui/system";
import MessagesHeader from './MessagesHeader'
import { connect } from "react-redux";
import Message from "./Message";
import DateSeparator from './DateSeparator'

const MainContainer = styled('div')({
    height: 'calc(100% - 60px)',
    width: '100%',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'flex-end'
})

const convertDateToHumanReadable = (date, format) => {
    const map = {
        mm: date.getMonth() + 1,
        dd: date.getDate(),
        yy: date.getFullYear().toString().slice(-2),
        yyyy: date.getFullYear
    }

    return format.replace(/mm|dd|yy|yyy/gi, (matched) => map[matched])
}

const Messages = ({ chosenChatDetails, chatType, messages }) => {
    
    return (
        <MainContainer className="messages-wrapper">
            <MessagesHeader username={chosenChatDetails?.username} channelName={chosenChatDetails?.channelName}/>
            {
                messages.map((message, idx) => {

                    const sameAuthor = idx > 0 && messages[idx].author._id === messages[idx-1].author._id
                    const sameDay = idx > 0 && 
                            convertDateToHumanReadable(new Date(message.date), "dd/mm/yy") === 
                    convertDateToHumanReadable(new Date(messages[idx - 1].date), "dd/mm/yy")
                
                    return (
                        <div key={message._id} style={{ width: '97%' }}>
                            {
                                (!sameDay || idx === 0) && <DateSeparator date={convertDateToHumanReadable(new Date(message.date), "dd/mm/yy")}/>
                            } 
                            <Message 
                                key={message._id}
                                content={message.content}
                                username={message.author.username}
                                sameAuthor={sameAuthor}
                                date={convertDateToHumanReadable(new Date(message.date), "dd/mm/yy")}
                                sameDay={sameDay}
                            />
                        </div>

                    )
                })
            }
        </MainContainer>
    )
}

const mapStoreStateToProps = ({ chat }) => {
    return {
        ...chat 
    }
}

export default connect(mapStoreStateToProps)(Messages)