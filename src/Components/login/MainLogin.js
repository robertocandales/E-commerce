import React, { Component } from 'react'
import Login from './loginComponents/Login/Login'
import Signup from './loginComponents/signup/Signup'
import Recover from './loginComponents/Recover/Recover'
import { Button } from 'antd';





const MainLogin = () => {



    const [showComponent, setShowComponent]= React.useState ({Login:true,
         Recover:false,
         Signup:false})
    
     return (
         <div>
                 {/* <Login /> */}

 {showComponent.Login ? <Login setShowComponent={setShowComponent} />: showComponent.Recover ? <Recover setShowComponent={setShowComponent} /> : <Signup />}
         </div>
     )
}

export default MainLogin
