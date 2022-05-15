import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Post = () => {
    
    const [postobject, setPostObject] = useState({});
    const {id} = useParams();

    useEffect(() =>{
        axios.get(`http://localhost:8080/posts/byId/${id}`).then((res) => {
            setPostObject(res.data);
        });
    });

    return (
    <div className='detail-post'>
        <div className='title-post'>
            {postobject.title}
        </div>
        <div className='postText-post'>
            {postobject.postText}
        </div>
        <div className='username-post'>
            {postobject.username}
        </div>
    </div>
  )
}

export default Post;