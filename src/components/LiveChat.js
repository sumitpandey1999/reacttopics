import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { generateRandomName } from "../utils/helper"
import { makeRandomMessage } from "../utils/helper"
import { addMessage } from "../utils/chatSlice"
import Chat from "./Chat"

const LiveChat = () => {
    const [liveChatMessage, setLiveChatMessage] = useState("")

    const dispatch = useDispatch()
    const chatMessages = useSelector((store) => store.chat.messages)

    useEffect(() => {
        const timeInterval = setInterval(() => {
            dispatch(addMessage({
                name: generateRandomName(),
                message: makeRandomMessage(20)
            }))
        }, 1000)

        return () => {
            clearInterval(timeInterval)
        }

    }, [])

    return (
        <div className="">
            <h1>Live Chat</h1>
            <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
            {
                chatMessages.map((data, index)=>{
                    return(
                        <Chat key={index} name={data.name} message={data.message} />
                    )
                })
            }
            </div>
            <form
                action=""
                onSubmit={(e) => {
                    e.preventDefault()

                    dispatch(addMessage({
                        name:"Sumit Pandey",
                       message: liveChatMessage
                    }))
                    setLiveChatMessage("")
                }}
            >
                <input
                    type="text"
                    placeholder="chat here"
                    className="bg-slate-300"
                    value={liveChatMessage}
                    onChange={(e) => {
                        setLiveChatMessage(e.target.value)
                    }}
                />
                <button className="bg-red-500">Submit</button>
            </form>

        </div>
    )
}

export default LiveChat