import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';
function App() {
  const title = 'Welcome to the new blog'
  const likes = 50;
  const link = "https://www.google.com"
  return (
    <div className="App">
 <div className="content">
   <Navbar />
   <Home />
   
 </div>
    </div>
  );
}

export default App;
