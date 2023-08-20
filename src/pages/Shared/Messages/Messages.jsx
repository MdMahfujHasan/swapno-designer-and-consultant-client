import { useEffect, useState } from "react";
import MessageCard from "./MessageCard";
import SectionTitle from "../../../components/SectionTitle";

const Messages = () => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        fetch('https://swapno-designer-and-consultant-server.vercel.app/messages')
            .then(res => res.json())
            .then(data => setMessages(data))
    }), []
    return (
        <>
            <SectionTitle>Messages</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mx-auto container gap-4 p-4">
                {
                    messages.map(singleMessage => <MessageCard
                        key={singleMessage._id}
                        singleMessage={singleMessage}
                    ></MessageCard>)
                }
            </div>
        </>
    );
};

export default Messages;