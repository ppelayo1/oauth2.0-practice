/* global gapi */
import logo from './logo.svg';
import './App.css';
import {GoogleLogin, GoogleLogout  }from 'react-google-login';

function App() {

  const responseGoogle = (response) => {
    console.log(response);
  }

  const logout = (response) => {
    console.log(response, 'success');
  }

  const logoutFailure = (response) => {
    console.log(response, 'failure');
  }

  
  

  return (
    <div className="App">
      alkshjaohotiwerhto
      <GoogleLogin
        clientId="794344810158-e00o3v3254fdo1aiujnpt2675rjc54r8.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        isSignedIn={false}
        cookiePolicy={'single_host_origin'}
        jsSrc={"  https://apis.google.com/js/api.js"}
      />,
      document.getElementById('googleButton')
    );

    <GoogleLogout
      clientId="794344810158-e00o3v3254fdo1aiujnpt2675rjc54r8.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={logout}
      onFailure={logoutFailure}
      jsSrc={"https://apis.google.com/js/api.js"}
    >
    </GoogleLogout>
    </div>
  );
}

export default App;
