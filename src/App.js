import logo from './logo.svg';
import './App.css';

function App() {
  const title = 'Welcome to the new blog'
  const likes = 50;
  const link = "https://www.google.com"
  return (
    <div className="App">
 <div className="content">
   <h1>{title}</h1>
   <p>Liked {likes} times</p>
   <a href={link} target="_blank">click here to visit google</a>
 </div>
    </div>
  );
}

export default App;
