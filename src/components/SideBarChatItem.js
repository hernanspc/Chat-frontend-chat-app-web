import React, { useContext } from 'react'
import { ChatContext } from '../context/chat/ChatContext';
import { fetchConToken } from '../helpers/fetch';
import { types } from '../types/types';

const SideBarChatItem = ({ usuario }) => {
    const { nombre, online } = usuario;

    const { chatState, dispatch } = useContext(ChatContext)
    const { chatActivo } = chatState;

    const onClick = async () => {

        dispatch({
            type: types.activarChat,
            payload: usuario.uid
        })

        //Cargar los mensajes del chat
        const resp = await fetchConToken(`mensajes/${usuario.uid}`);
        dispatch({
            type: types.cargarMensajes,
            payload: resp.mensajes
        })

        //TODO: mover scroll
    };

    return (
        <div
            className={`chat_list ${(usuario.uid === chatActivo) && 'active_chat'}`}
            onClick={onClick}
        >
            <div className="chat_people">
                <div className="chat_img">
                    <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
                </div>
                <div className="chat_ib">
                    <h5>{nombre}</h5>
                    {online ?
                        <span className="text-success">Online</span>
                        :
                        <span className="text-danger">Offline</span>
                    }
                </div>
            </div>
        </div>
    )
}

export default SideBarChatItem