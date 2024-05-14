import './App.css';
import NavBar from './components/NavBar';
import Profile from './components/Profile.js';
import ChatBox from './components/ChatBox';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='span_1_of_3'>
        <Profile/>
      </div>
      <div className='span_2_of_3'>
        <ChatBox/>
      </div>
      
    </div>
  );
}

export default App;
