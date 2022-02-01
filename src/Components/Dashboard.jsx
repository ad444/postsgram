import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import '../CSS/dashboard.css';
import PostCard from './PostCard';
import axios from 'axios';
import BrandImgNameContainer from './BrandImgNameContainer';
import Spinner from './Spinner';

const baseURL = 'https://jsonplaceholder.typicode.com/posts/';

const Dashboard = () => {
    let history = useHistory();

    const [posts, setPosts] = useState([]);

    //loading spinner
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
       axios.get(baseURL).then((response)=>{
           setPosts(response.data);
           setLoading(false);
       }).catch((err)=>{
           console.log(err);
       })
    }, []);

    const goBack = () =>{
      history.goBack();
    }
  return (
      <>
        <div className='row'>
            <i onClick={goBack} id='backArrow' className='fas fa-arrow-left'></i>
            <div id='dashboardHeader' className='col-12'>
                <BrandImgNameContainer text='Check out all the posts'/>
            </div>
        </div>
        <div id='postsContainer' className='row'>
            {
               posts.map((elem, index)=>{
                   return <PostCard key={elem.id} title={elem.title} description={elem.body}/>
               })
            }
           
        </div>
        {
            loading === true && <Spinner />
        }
        
      </>
  )
};

export default Dashboard;
