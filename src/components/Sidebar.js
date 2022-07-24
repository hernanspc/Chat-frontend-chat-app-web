import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'
import { ChatContext } from '../context/chat/ChatContext'
import SideBarChatItem from './SideBarChatItem'

const Sidebar = () => {

    const { chatState } = useContext(ChatContext);
    const { auth } = useContext(AuthContext);

    const { uid } = auth;

    return (
        <div className="inbox_chat">

            {
                chatState.usuarios
                    .filter(user => user.uid !== uid)
                    .map((usuario) => (
                        <SideBarChatItem
                            key={usuario.uid}
                            usuario={usuario}
                        />
                    ))
            }

            {/* <!-- Espacio extra para scroll --> */}
            <div className="extra_space"></div>

        </div>
    )
}

export default Sidebar