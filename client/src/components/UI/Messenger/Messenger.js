import { useState } from "react";
import "./Messenger.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTimes,
    faUserFriends,
    faCommentAlt,
    faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { formatDate } from './../../../utils/Helper';

const Messenger = ({ setIsMessenger, sendMsg, messageList }) => {
    const [msg, setMsg] = useState("");

    const handleChangeMsg = (e) => {
        setMsg(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            sendMsg(msg);
            setMsg("");
        }
    };

    const handleSendMsg = () => {
        sendMsg(msg);
        setMsg("");
    }
    return (
        <div className="msg-container">
            <div className="msg-header">
                <h3>
                    Meeting Details
                </h3>
                <FontAwesomeIcon className="icon" icon={faTimes} onClick={() => {
                    setIsMessenger(false);
                }} />
            </div>
            <div className="msg-header-tabs">
                <div className="tab">
                    <FontAwesomeIcon className="icon" icon={faUserFriends} />
                    <p>Person 1</p>
                </div>
                <div className="tab active">
                    <FontAwesomeIcon className="icon" icon={faCommentAlt} />
                    <p>Chat</p>
                </div>
            </div>
            <div className="chat-sec">
                {messageList.map((item) => (
                    <div key={item.time} className="chat-block">
                        <div className="msg-sender">
                            {item.user}<small>{formatDate(item.time)}</small>
                        </div>
                        <p className="msg">{item.msg}</p>
                    </div>
                ))}

            </div>

            <div className="send-msg-sec">
                <input placeholder="Say Hi to Everyone!" value={msg} onChange={(e) => handleChangeMsg(e)} 
                onKeyDown ={(e) => handleKeyDown(e)}/>
                <FontAwesomeIcon className="icon" icon={faPaperPlane} onClick={handleSendMsg}/>
            </div>

        </div>
    )
}
export default Messenger;