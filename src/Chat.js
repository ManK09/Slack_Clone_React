import React,{useState, useEffect} from 'react'
import './Chat.css'
import {useParams} from 'react-router-dom'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import db from "./firebase"
import Message from './Message'
import ChatInput from './ChatInput'
function Chat() {

    const { roomId } = useParams(); 
    const [roomDetails,setRoomDetails] = useState(null);
    const [roomMessages,setRoomMessages] = useState([]);

    useEffect(()=>{
        if(roomId){
            db.collection('rooms').doc(roomId)
            .onSnapshot(snapshot => (
                setRoomDetails(snapshot.data())
            ))
        }

        db.collection('rooms').doc(roomId)
        .collection('messages')
        .orderBy('timestamp','asc')
        .onSnapshot(snapshot =>
            setRoomMessages(snapshot.docs.map(doc => doc.data()))
        )
    },[roomId])

    // console.log("Oye",roomDetails);
    // console.log("ohh",roomMessages);

    return (
        <div className="chat">
            {/* <h2>You are in room {roomId}</h2> */}
            <div className="chat_header"> 
                <div className="chat_headerLeft">
                    <h4 className="chat_channelName">
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className="chat_headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>

            <div className="chat_messages">
                {roomMessages.map(({message,timestamp, user, userImage}) => (
                    <Message message={message}
                    timestamp={timestamp}
                    user={user}
                    userImage={userImage} />
                ))}
            </div>

            <ChatInput channelName={roomDetails?.name} channelId={roomId} />
        </div>
    )
}

export default Chat
