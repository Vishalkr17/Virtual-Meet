import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faExclamationCircle,
  faCog,
  faItalic,
} from "@fortawesome/free-solid-svg-icons";

import './Header.scss';

const Header = () =>{
    return(
        <div className="header">
            <div className = "logo">
                <img src="https://lh3.googleusercontent.com/l9MoBLX6WkeU6QLyS1CB1uEtQZnR0LR4NwE8H8KmN2pwvarE-acXVftvXhhZaLyRMbYEEA=s85"></img>
                <span className="help-text">
                   <strong><faItalic>VIRTUAL MEET</faItalic></strong> 
                </span>
            </div>
            <div className="action-btn">
            <FontAwesomeIcon className="icon-block" icon={faQuestionCircle} />
             <FontAwesomeIcon className="icon-block" icon={faExclamationCircle} />
            <FontAwesomeIcon className="icon-block" icon={faCog} />
            </div>
        </div>
    )
}
export default Header;