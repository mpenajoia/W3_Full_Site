import './App.css';
// used to set  up links to pages
import { Switch, Route, Link } from 'react-router-dom';
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
            <Switch>
              <Route exact path="/">
                <Homepage/>
              </Route>
              <Route exact path="/exchanges">
                <Exchanges/>
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies/>
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails/>
              </Route>
              <Route exact path="/news">
                <News/>
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>
      <div className='footer'>

      </div>
    </div>
  );
}

export default App;
