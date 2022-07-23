import React from 'react'
import SideBarChatItem from './SideBarChatItem'

const Sidebar = () => {
    return (
        <div className="inbox_chat">

            <SideBarChatItem />

            {/* <!-- Espacio extra para scroll --> */}
            <div className="extra_space"></div>

        </div>
    )
}

export default Sidebar