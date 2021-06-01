const Home = () => {
    const handleClick = () =>{
        console.log("hello,ninjas");
    }

    const handleClickAgain = (name) =>{
        console.log("hello " + name);
    }
    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>click me</button>
            <button onClick={()=>handleClickAgain('mario')}>click me again</button>
        </div>
     );
}
 
export default Home;