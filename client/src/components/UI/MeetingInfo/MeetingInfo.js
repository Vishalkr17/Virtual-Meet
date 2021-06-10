import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faTimes,
  faUser,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";

import "./MeetingInfo.scss";

const MeetingInfo = ({ setMeetInfoPopup, url }) => {
  return (
    <div className="meeting-info-block">
      <div className="meeting-header">
        <h3>Get ready for your meeting</h3>
        <FontAwesomeIcon className="icon" icon={faTimes} onClick={() =>{
          setMeetInfoPopup(false);
        }
        }/>
      </div>
      <button className="add-picon-btn">
        <FontAwesomeIcon className="icon" icon={faUser} />
          Add Peers
        </button>
      <p className="info-text">
        Or share this meeting link with others you want in the meeting
        </p>
      <div className="meeting-link">
        <span>{url}</span>
        <FontAwesomeIcon
          className="icon"
          icon={faCopy}
          onClick={() => navigator.clipboard.writeText(url)}
        />
      </div>
      <div className="permission-text">
        <FontAwesomeIcon className="icon blue" icon={faShieldAlt} />
        <p className="small-text">
          People who use this meeting link must get permitted before they
          can join.
          </p>
      </div>
      <p className="small-text">Joined as kumar.vishal943@gmail.com</p>
    </div>
  );
};

export default MeetingInfo;