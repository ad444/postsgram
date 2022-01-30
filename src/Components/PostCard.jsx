import React, {useRef} from 'react';
import sampleImage from '../Images/sampleImage.jpg';

const PostCard = (props) => {
   
    const ref = useRef();

    const zoomIn = () =>{
        ref.current.style.overflow = 'visible';
        ref.current.style.whiteSpace = 'normal';
    }

    const zoomOut = () =>{
        ref.current.style.overflow = 'hidden';
        ref.current.style.whiteSpace = 'nowrap';
    }
    return (
        <>
            <div id='postCard' className='col-10 col-xs-10 col-sm-9 col-md-5 col-lg-5 mx-auto' onMouseOver={zoomIn} onMouseOut={zoomOut}>
                <div className='postCardImageContainer'>
                    <img className='postCardImage' src={sampleImage} alt="post_error" />
                </div>
                <div className='postCardContent'>
                    <p className='postTitle'>{props.title}</p>
                    <hr />
                    <p className='postDescription' ref={ref}>{props.description}</p>
                </div>
            </div>
        </>
    )
};

export default PostCard;
