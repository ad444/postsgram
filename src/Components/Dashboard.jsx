import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import '../CSS/dashboard.css';
import PostCard from './PostCard';
import axios from 'axios';
import BrandImgNameContainer from './BrandImgNameContainer';

const baseURL = 'https://jsonplaceholder.typicode.com/posts/';

const Dashboard = () => {
    let history = useHistory();

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
       axios.get(baseURL).then((response)=>{
           console.log(response.data);
           setPosts(response.data);
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
                   return <PostCard key={index} title={elem.title} description={elem.body}/>
               })
            }
           
        </div>
      </>
  )
};

export default Dashboard;
