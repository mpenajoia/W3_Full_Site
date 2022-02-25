import './App.css';
// used to set  up links to pages
import { Switch, Route, Link, Routes } from 'react-router-dom';
// resources from ant design
import { Layout, Typography, Space } from 'antd';
// bring in Navbar comp DEPRECATED
// import Navbar from './components/Navbar';
// after making index.js in components folder the following is possible
import { Navbar, Exchanges, Homepage, Cryptocurrencies, CryptoDetails, News } from './components';

function App() {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path="/" element={<Homepage/>}/>
              <Route exact path="/exchanges" element={<Exchanges/>}/>
              <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
              <Route exact path="/crypto/:coinId" element={<CryptoDetails/>}/>
              <Route exact path="/news" element={<News/>}/>
            </Routes>
          </div>
        </Layout>
      </div>
      <div className='footer'>

      </div>
    </div>
  );
}

export default App;
