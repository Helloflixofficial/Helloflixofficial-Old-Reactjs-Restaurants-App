import React, { useState } from 'react'
import {GoogleLogin, GoogleLogout} from "react-google-login";

export function Login() {
 const Clientid = "44429279631-jg48at0q8qk2g7s014ho15aeier27i2k.apps.googleusercontent.com";
//  use state came
const [loginButton,setLoginButton] = useState(true)
const [logoutButton,setLogoutButton] = useState(false)


 ////////////////
const onLoginSuccess = (res) => {
    console.log("LOGIN COMPLEATE", res.profileObj);
    setLoginButton(false)
    setLogoutButton(true)
}
const onFailureSuccess = (res) => {
    console.log("Sorry login Not Compleate");
 
}

// message
const onSignoutSuccess = () => {
  alert("YOUHAVE BEEN SINGOUT SUCCESSFULLY")
  setLoginButton(true)
  setLogoutButton(false)
}



/////////////////

// LOGINPAGE
return(
    <>
    {loginButton ?
  <GoogleLogin
    clientId={Clientid}
    buttonText="Login"
    onSuccess={onLoginSuccess}
    onFailure={onFailureSuccess}
    cookiePolicy={'single_host_origin'}
 />: null 
 }

{/* LOGOUTPAGE */}
{logoutButton ?
<GoogleLogout
      clientId={Clientid}
      buttonText="Logout"
      onLogoutSuccess={onSignoutSuccess}
    >
    </GoogleLogout> : null
}
    </> 

)
}