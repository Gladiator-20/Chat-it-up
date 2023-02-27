import React from 'react'
import Navbar from "./Navbar"
import Searchbar from "./Searchbar"
import Chats from "./Chats"

const Sidebar = () => {
    return (
        <div className='Sidebar'>
            <Navbar/>
            <Searchbar/>
            <Chats/>
        </div>
    )
}

export default Sidebar;