import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import ShoppingsProducts from './Components/ShoppingProducts/ShoppingsProducts';
import Profile from './Components/Profile/Profile';
import NavBar from './Components/NavBar/NavBar';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import MainLogin from './Components/login/MainLogin';


function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <div style={{ padding: '20px' }}>
          <Switch>
            <Route
              exact
              name='ShoppingsProducts'
              path='/ShoppingsProducts'
              render={(props) => <ShoppingsProducts {...props} />}
            />{' '}
            <Route
              exact
              name='ShoppingCart'
              path='/ShoppingCart'
              render={(props) => <ShoppingCart {...props} />}
            />
            <Route
              exact
              name='Profile'
              path='/Profile'
              render={(props) => <Profile {...props} />}
            />
            <Route
              exact
              name='Login'
              path='/Login'
              render={(props) => <MainLogin {...props} />}
            />
            <Redirect from='/' to='/login' />
          </Switch>
        </div>
      </Router>

      {/*<Footer />*/}
    </div>
  );
}

export default App;
