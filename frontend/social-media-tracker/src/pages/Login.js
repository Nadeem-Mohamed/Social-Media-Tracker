import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import './login.css';

function Login() {
	const [ user, setUser ] = useState([]);
	const [ profile, setProfile ] = useState([]);

	const login = useGoogleLogin({
		onSuccess: (codeResponse) => setUser(codeResponse),
		onError: (error) => console.log('Login Failed:', error)
	});

	  useEffect(
		  () => {
			  if (user) {
				  axios
					  .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
						  headers: {
							  Authorization: `Bearer ${user.access_token}`,
							  Accept: 'application/json'
						  }
					  })
					  .then((res) => {
						  setProfile(res.data);
					  })
					  .catch((err) => {
						logOut();
						console.log(err)
					  });
			  }
		  },
		  [ user ]
	  );

	const logOut = () => {
		googleLogout();
		setProfile(null);
	};

	return (
		<div className="Login-page">
		  {profile ? (
			<div>
			  <img src={profile.picture} alt="User Profile" />
			  <h3>User Logged in</h3>
			  <p className="profile-info">Name: {profile.name}</p>
			  <p className="profile-info">Email Address: {profile.email}</p>
			  <button className="Sign-in-button" onClick={logOut}>
				Log out
			  </button>
			</div>
		  ) : (
			<button className="Sign-in-button" onClick={() => login()}>
			  <img src={process.env.PUBLIC_URL + "/assets/google.png"} className="Sign-in-Google-logo" alt="Google Logo" />
			  <p className="Sign-in-text">
				Sign in with Google
			  </p>
			</button>
		  )}
		</div>
	);
}
export default Login;