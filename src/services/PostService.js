import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const postApi = createApi({
    reducerPath:"postApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://jsonplaceholder.typicode.com"
    }),
    endpoints:(builder)=>(
        {
            getAllPost:builder.query({
                query:()=>({
                    url:"posts",
                    method: 'GET'
                })
            }),
            getSinglePost:builder.query({
                query:(id)=>{
                    return {
                        url:`posts/${id}`,
                        method:"GET"
                    }
                }
            }),
            getPostByLimit:builder.query({
                query: (num) => {
                 console.log("Limit Number:", num)
                 return {
                  url: `posts?_limit=${num}`,
                  method: 'GET'
                 }
                }
               }),

               deletePost: builder.mutation({
                query: (id) => {
              
                 return {
                  url: `posts/${id}`,
                  method: 'DELETE'
                 }
                }
               }),
               createPost:builder.mutation({
                query:(body)=>{
                    console.log("Deken to asche naki",body)
                    return {
                        url:'posts',
                        method:"POST",
                        body,
                        headers:{
                            'Content-Type': 'application/json'
                        }
                    }
                }
               }),
               updatePost:builder.mutation({
                query:(updateData)=>{
                    console.log(updateData)
                    const { id, ...data } = updateData
                    console.log("Actual Update Post: ", data)
                    return {
                     url: `posts/${id}`,
                     method: 'PUT',
                     body: data,
                     headers: {
                      'Content-type': 'application/json; charset=UTF-8',
                     }
                    }

                }
               })
         
        }
    )
})

export const {useGetAllPostQuery,useGetSinglePostQuery,useGetPostByLimitQuery,useDeletePostMutation,useCreatePostMutation, useUpdatePostMutation} = postApi