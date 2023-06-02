import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { getAuth, signInWithPopup, TwitterAuthProvider } from "firebase/auth";

import axios from 'axios';
import './login.css';

function Login() {
	const [ user, setUser ] = useState([]);
	const [ profile, setProfile ] = useState([]);

	const googleLogin = useGoogleLogin({
		onSuccess: (codeResponse) => setUser(codeResponse),
		onError: (error) => console.log('Login Failed:', error)
	});

	const twitterLogin = ()=>{
		const provider = new TwitterAuthProvider();
		const auth = getAuth()
		console.log(auth)
		signInWithPopup(auth, provider)
		.then((re)=>{
			console.log(re._tokenResponse);

			const twitProf = {
				'name': re._tokenResponse.displayName,
				'profileName': re._tokenResponse.screenName
			}
			setProfile(twitProf);
			
		})
		.catch((err)=>{
			console.log('Login Failed:', err);
		})
	}

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
						  console.log(res);
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
			<div>
				{/* <button className="Sign-in-button" onClick={() => googleLogin()}>
					<img src={process.env.PUBLIC_URL + "/assets/google.png"} className="Sign-in-Google-logo" alt="Google Logo" />
					<p className="Sign-in-text">
					Sign in with Google
					</p>
				</button> */}

				<button className="Sign-in-button" onClick={() => twitterLogin()}>
					<img src={process.env.PUBLIC_URL + "/assets/twitter.png"} className="Sign-in-Twitter-logo" alt="Google Logo" />
					<p className="Sign-in-text">
					Sign in with Twitter
					</p>
				</button>
			</div>
		  )}
		</div>
	);
}
export default Login;