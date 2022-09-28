import React from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useGetSinglePostQuery } from '../services/PostService';
function SinglePost() {
    const navigate = useNavigate()
    const {id} = useParams()
    const {data}= useGetSinglePostQuery(id);
 

  return (
    <div>
         <h2>{id} {data?.title} </h2>
        <p>{data?.body}</p>
        <button onClick={() => navigate(-1)} >Go Back</button>
        <hr></hr>
        
        
        </div>
  )
}

export default SinglePost