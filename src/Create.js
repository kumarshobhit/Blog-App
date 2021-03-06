import React, { useState } from 'react'
import { useHistory } from 'react-router'


function Create() {
    const [title,setTitle]=useState('') 
    const [body,setBody]=useState('') 
    const [author,setAuthor]=useState('shobhit') 
    const [loading,setLoading]=useState(false)
    const history=useHistory()

    const handleSubmit=e=>{
        e.preventDefault()
        const blog={title,body,author}
        setLoading(true)
        fetch('http://localhost:8000/blogs',{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added')
            setLoading(false)
            history.push('/')
        })
    }
    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}> 
            <label htmlFor="">Blog title:</label>
            <input type="text" required  value={title} onChange={e=>setTitle(e.target.value)} />
            <label htmlFor="">Blog body:</label>
            <textarea required  value={body} onChange={e=>setBody(e.target.value)}></textarea>
            <label htmlFor="">Blog author:</label>
            <select  value={author} onChange={e=>setAuthor(e.target.value)}>
            <option value="shobhit">shobhit</option>
            <option value="shaurya">shaurya</option>
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
            </select>
            <div className="btn">
            {!loading && <button>Submit</button> }
            {loading && <button>Submitting..</button> }
            </div>
            </form>
        </div> 
    )
}

export default Create
