import React,{useState} from 'react'
const Home= () => {
    // const [name,setName]=useState('mario')
    // const [age,setAge] = useState(20) ;
    // const handleClick= e => { 
    //     setName('luigi')
    //     setAge(30 )
    // }
    // const handleClickAgain = (name,e) => {
    //     console.log(`hello ${name}`,e.target) ;
    // }
    // <button onClick={e =>  handleClickAgain('mario',e) }>Click me again</button>
    return (
        <div className='home'>
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
            
        </div>
    )
}

export default Home ;