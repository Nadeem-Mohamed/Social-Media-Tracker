import React, { useState } from 'react';
import { loginTwitter, logoutTwitter } from '../functions/Login-Function'
import './login.css';
import Authentication from '../functions/Authentication';

function Login() {
	const [ profile, setProfile ] = useState([]);
	
	const logOut = () => {
		logoutTwitter()
		setProfile(null);
	};
	
	const twitterLogin = ()=>{
		loginTwitter()
		.then((re) => {
			const twitProf = {
				'name': re._tokenResponse.displayName,
				'profileName': re._tokenResponse.screenName,
			}
			setProfile(twitProf)
		})
	}

	const changeUser = () => {
		var userInfoAuth = Authentication();
		if(userInfoAuth) {
			return userInfoAuth;
		}
		return false;
	}
	
	let userInfo = changeUser()
	if(userInfo) {
		profile.name = userInfo.displayName
		profile.profileName = userInfo.reloadUserInfo.screenName
		console.log(userInfo.reloadUserInfo.Sc)
	}

	return (
		<div className="Login-page">
		  {profile ? (
			<div>
			  <img src={profile.picture} alt="User Profile" />
			  <h3>User Logged in</h3>
			  <p className="profile-info">Name: {profile.name}</p>
			  <p className="profile-info">Profile: {profile.profileName}</p>
			  <button className="Sign-in-button" onClick={logOut}>
				Log out
			  </button>
			</div>
		  ) : (
			<div>
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