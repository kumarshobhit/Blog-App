   
import BlockList from './BlockList'
import Spinner from './Spinner'
import useFetch from './userFetch'
const Home= () => {
   
    const {data:blogs,loading,error}=useFetch('http://localhost:8000/blogs')
    // <BlockList blogs={blogs.filter(ele=>ele.author==='mario')} title={'Mario blogs!!'}  handleDelete={handleDelete}/>
    return (
        <div className='home'>
        {error && <div>{error}</div>}
        {loading && <Spinner/> }
          {blogs && <BlockList blogs={blogs} title={'All blogs!!'} />  } 
        </div> 
    )
}

export default Home ;