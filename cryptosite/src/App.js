import './App.css';
// used to set  up links to pages
import { Switch, Route, Link } from 'react-router-dom';
// resources from ant design
import { Layout, Typography, Space } from 'antd';
// bring in Navbar comp DEPRECATED
// import Navbar from './components/Navbar';
// after making index.js in components folder the following is possible
import { Navbar } from './components';



function App() {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>

      </div>
      <div className='footer'>

      </div>
    </div>
  );
}

export default App;
