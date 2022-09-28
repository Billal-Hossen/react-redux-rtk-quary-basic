import React, { useState } from 'react';
import AddPost from '../components/AddPost';
import PostList from '../components/PostList';
import { useGetPostByLimitQuery } from '../services/PostService';

export default function Home() {
    const limit  = 10;
    // const {data, isError, isLoading,isSuccess} =  useGetAllPostQuery()
    const {data, isError, isLoading,isSuccess} =  useGetPostByLimitQuery(limit)
    const [show,setShow] = useState(true)


  return (
    <div>
        {show?
         <button onClick={()=>setShow(!show)}>CreatePost</button>
         : <AddPost show={show} setShow={setShow} />
         }
       
         {isLoading&&  <h1>Loading..............</h1>}
        {
        isSuccess&& data?.map(post=><PostList key={post.id} post={post}/>)
        }
    </div>
  )
}
