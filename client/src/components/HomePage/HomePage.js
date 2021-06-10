import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faVideo,
    faKeyboard
} from "@fortawesome/free-solid-svg-icons";
import shortid from "shortid";
import Header from './../UI/Header/Header';
import "./HomePage.scss";

const HomePage = () => {

    const history = useHistory();

    const startCall = () =>{
        //We have to generate unique id 
        const uuid = shortid.generate();
        // Redirect to Call Page
        history.push(`/${uuid}#init`); // init is the initiator who initiated the video call and the second person has the link to join the call
        
    }
    return (
        <div className="home-page">
            <Header />
            <div className="body">
                <div className="left-section">
                    <div className="content">
                        <h2>
                            Premium Video Meetings for you.
                       </h2>
                        <p>
                            In-person or afar, Virtual Meet brings everyone together to do exceptional work.
                            We're here to help you connect, communicate, and express your ideas so you can get more done together.
                       </p>
                        <div className="action-btn">
                            <button className="btn red" onClick={startCall}>
                                <FontAwesomeIcon className="icon-block" icon={faVideo} />
                                New Meeting
                            </button>

                            <div className="input-block">
                                <div className="input-section">
                                    <FontAwesomeIcon className="icon-block" icon={faKeyboard} />
                                    <input placeholder="Enter a code or link" />
                                </div>
                                <button className="btn-submit">
                                    Join
                            </button>
                            </div>
                        </div>

                    </div>
                    <div className="help-text">
                        <a href="">Learn More</a> about Virtual Meet
                   </div>
                </div>
                <div className="right-section">
                    <div className="content">
                        <img src="https://www.webex.com/content/dam/wbx/us/images/hp/webexone/hp_hero.jpg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;