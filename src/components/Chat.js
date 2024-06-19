import React from 'react'

const Chat = ({ name, message }) => {
    return (
        <div>
            <div className='w-20 flex'>
                <img
                    className='w-8'
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                    alt="user" />
                <span className='font-bold px-1'>{name}</span>
                <span className='text-red-900 px-2'>{message}</span>
            </div>

        </div>
    )
}

export default Chat
