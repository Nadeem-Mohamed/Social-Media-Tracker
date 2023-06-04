import React, { useState } from 'react';
import { loginTwitter } from '../functions/Login-Function'
import './login.css';
import Authentication from '../functions/Authentication';
import { useNavigate } from 'react-router-dom';

function Login() {
	const [ profile, setProfile ] = useState([]);
	const navigate = useNavigate();
	
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

		navigate('/');
	}

	return (
		<div className="Login-page">
			<div>
				<button className="Sign-in-button" onClick={() => twitterLogin()}>
					<img src={process.env.PUBLIC_URL + "/assets/twitter.png"} className="Sign-in-Twitter-logo" alt="Google Logo" />
					<p className="Sign-in-text">
					Sign in with Twitter
					</p>
				</button>
			</div>
		</div>
	);
}
export default Login;