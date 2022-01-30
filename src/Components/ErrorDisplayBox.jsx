import React from 'react'
import {Link} from 'react-router-dom'
import '../CSS/errordisplaybox.css';
const ErrorDisplayBox = (props) => {
    return (
        <div id="errorMessageDisplayBox">
            <i className='fas fa-times' id="errorMessageDisplayBoxCancel" onClick={()=>{
                props.closeDisplayBox();
            }}></i>
            <p id="errorMessage">{props.message}
              <br/>Please <Link style={{cursor:'pointer'}} to={`/${props.navigate}`}>{props.navigate}</Link>
            </p>
        </div>
    )
}

export default ErrorDisplayBox;