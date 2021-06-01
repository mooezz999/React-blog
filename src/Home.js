import {useState} from 'react';
const Home = () => {
   //  let name='mario';
const [name,setName] = useState('mario');
const [age, setAge] = useState(25);
    const handleClick = () =>{
    setName('luigi');
    setAge(30);
    }

    const handleClickAgain = (name) =>{
        console.log("hello " + name);
    }
    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>click me</button>
            <button onClick={()=>handleClickAgain('mario')}>click me again</button>
        </div>
     );
}
 
export default Home;