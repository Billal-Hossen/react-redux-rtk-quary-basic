import React, { useState } from 'react'
import { useCreatePostMutation } from '../services/PostService'

function AddPost({show,setShow}) {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [userId,setUserId] = useState('')
    const [newPost, respone] =  useCreatePostMutation()
    

    const onSave=(event) =>{
       newPost({title,body,userId})
       setTitle("")
       setBody("")
       setUserId('')
       setShow(!show)
       event.preventDefault();
    }
    console.log(respone.isSuccess)
      
     const canActive = Boolean(title) && Boolean(body) && Boolean(userId) ;
  return (
    <div>
     <form >
     <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Enter Title'/>
        <input value={body} onChange={(e)=>setBody(e.target.value)} placeholder='Enter Title'/>
        <input value={userId} onChange={(e)=>setUserId(e.target.value)} placeholder='Enter Title'/>
        <button disabled={!canActive} onClick={onSave}>Seve</button>
     </form>
   
    </div>
  )
}

export default AddPost