import React, { useState } from 'react';
import Login from './loginComponents/Login/Login';
import Signup from './loginComponents/signup/Signup';
import Recover from './loginComponents/Recover/Recover';

const MainLogin = () => {
  const [showComponent, setShowComponent] = useState({
    Login: true,
    Recover: false,
    Signup: false,
  });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}>
      {/* <Login /> */}

      {showComponent.Login ? (
        <Login setShowComponent={setShowComponent} />
      ) : showComponent.Recover ? (
        <Recover setShowComponent={setShowComponent} />
      ) : (
        <Signup setShowComponent={setShowComponent} />
      )}
    </div>
  );
};

export default MainLogin;
