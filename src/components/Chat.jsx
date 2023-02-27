import React, {useContext} from 'react'
import Camera from "../image/video-camera-64.png"
import Add from "../image/add-friend-58.png"
import Dot from "../image/menu-vertical-50.png"
import Messages from './Messages'
import Input from './Input'
import {ChatContext} from "../context/chatContext"

const Chat = () => {
    const { data } = useContext(ChatContext);

    return (
        <div className='Chat'>
            <div className='ChatInfo'>
                <span>{data.user?.displayName}</span>
                <div className='ChatIcons'>
                    <img style={{margin: "0 5px"}} src={Camera} alt=""/>
                    <img src={Add} alt=""/>
                    <img src={Dot} alt=""/>
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    )
}

export default Chat;