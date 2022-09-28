import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDeletePostMutation, useUpdatePostMutation } from '../services/PostService';
const PostList = ({post}) => {
  
    const {id, title,body}  = post;
   const navigate = useNavigate()
   const [deletePost,response] =  useDeletePostMutation()
   const [updatePost,res] =  useUpdatePostMutation()
   const [ showUpdate,sethowUpdate]  = useState(true)
//    alert(response.isSuccess)

const [test,setTest] = useState({})
const [newTitle,setNewTitel] = useState('')
const [newBody,setNewBody] = useState('')
const [newUserId,setUserId] = useState('')
   
  const handleChangePost = (id)=>{
    
    updatePost(id)
    sethowUpdate(!showUpdate)
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>res.json()
    .then(data=>setTest(data)))
  }
  const updatedPost = {
    id:test.id,
    title:newTitle,
    body:newBody,
    userId:newUserId
  }
  const updateSave = (event)=>{
    updatePost(updatedPost)
    event.preventDefault();
  }


 

  return (
    <div  >
        <h2>{id} {title} </h2>
        <p>{body}</p>
        <button onClick={() => navigate(`/posts/${id}`)} >See Here Details</button>
        <button onClick={() =>deletePost(id)} >Delete Post</button>
        {response?.isSuccess && <h1>DELETED</h1>}
       {
        showUpdate? <button onClick={() =>handleChangePost(id)} >Update Post</button>:
        <form >
        <input 
         value={test.title} 
         onChange={(e)=>setNewTitel(e.target.value)}
          placeholder='Enter Title'/>
           <input 
        //    value={test.body} 
           onChange={(e)=>setNewBody(e.target.value) }
           placeholder='Enter Title'/>
           <input 
        //    value={test.userId} 
           onChange={(e)=>setUserId(e.target.value) }
           placeholder='Enter Title'/>
           <button onClick={updateSave} >Seve</button>
        </form>
      
       }
        <hr></hr>
    </div>
  )
}

export default PostList
