import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/chatContext'

const Message = ({message}) => {
    const {currentUser} = useContext(AuthContext);
    const {data} = useContext(ChatContext);

    const ref = useRef();

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);


    return (
        <div ref={ref} className={`Message ${message.senderId === currentUser.uid && "Owner"}`}>
            <div className='MessageInfo'>
                <img src={message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt="img"/>
                <span>just now</span>
            </div>
            <div className='MessageContent'>
                {message.text && <p>{message.text}</p>}
                {message.img && <img src={message.img} alt=""/>}
            </div>
        </div>
    );
};

export default Message;