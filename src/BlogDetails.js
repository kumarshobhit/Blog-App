import React from 'react'
import { useHistory, useParams } from 'react-router'
import Spinner from './Spinner'
import userFetch from './userFetch'
const  BlogDetails=() =>  {
    const {id}=useParams()
    const {data,loading,error}=userFetch(`http://localhost:8000/blogs/${id}`)
    const history=useHistory()

    const handleClick=()=>{
    fetch(`http://localhost:8000/blogs/${id}`,{
        method:'DELETE'
    }).then(()=>{
        history.push('/')
    })
    }

    return (
        <div className="blog-details">
        {error && <div>{error}</div>}
        {loading && <Spinner/> }
           {data && 
            <article>
            <h2>{data.title  }</h2>
            <p>Written by:{data.author}</p>
            <div>{data.body}</div>
            <button onClick={handleClick}>Delete</button>
            </article>
        }
        
        </div>
    )
}

export default BlogDetails
