import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faVideo,
    faMicrophone,
    faPhone,
    faAngleUp,
    faDesktop,
    faMicrophoneSlash,
    faVideoSlash,
    
} from "@fortawesome/free-solid-svg-icons";
import "./CallPageFooter.scss";

const CallPageFooter = ({
    isPresenting,
    stopScreenShare,
    screenShare,
    isAudio,
    toggleAudio,
    disconnectCall,
    isVideo,
    toggleVideo
}) => {
    return (
        <div className="footer-item">
            <div className="left-item">
                <div className="icon-block">
                    Meeting details
          <FontAwesomeIcon className="icon" icon={faAngleUp} />
                </div>
            </div>
            <div className="center-item">
                <div
                    className={`icon-block ${!isAudio}?"r-bg":null`} onClick={()=>toggleAudio(!isAudio)}
                >
                    <FontAwesomeIcon
                        className="icon"
                        icon={isAudio ? faMicrophone:faMicrophoneSlash}
                    />
                </div>
                <div className="icon-block" onClick={disconnectCall}>
                    <FontAwesomeIcon className="icon r" icon={faPhone} />
                </div>
                <div className ={`icon-block ${!isVideo}?"r-bg":null`} onClick={()=>toggleVideo(!isVideo)}>
                    <FontAwesomeIcon className="icon"  icon={isVideo ? faVideo:faVideoSlash} />
                </div>
            </div>
            <div className="right-item">
                
                
                {isPresenting ?(
                <div className="icon-block" onClick={stopScreenShare} >
                <FontAwesomeIcon className="icon r" icon={faDesktop} />
                <p className="title">Stop presenting</p>
            </div>
                ):(
                <div className="icon-block" onClick={screenShare}>
                <FontAwesomeIcon className="icon r" icon={faDesktop} />
                <p className="title">Present now</p>
                </div>
                )}
            </div>
        </div>

    );
};

export default CallPageFooter;