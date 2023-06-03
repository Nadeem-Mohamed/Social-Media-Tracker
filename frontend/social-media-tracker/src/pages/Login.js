import React, { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, signInWithCredential, TwitterAuthProvider } from "firebase/auth";
import './login.css';

function Login() {
	const [ profile, setProfile ] = useState([]);

	var accessToken = localStorage.getItem("accessToken")
	var secret = localStorage.getItem("secret")
	
	const provider = new TwitterAuthProvider();
	const auth = getAuth()

	const logOut = () => {
		localStorage.removeItem("accessToken")
		localStorage.removeItem("secret")
		setProfile(null);
	};

	const autoSignIn =()=> {
		if(accessToken == null) {
			logOut();
		} else {
			var cred = TwitterAuthProvider.credential(accessToken, secret);

			signInWithCredential(auth, cred)
			.then((re)=>{
				console.log(re);
				const credential2 = TwitterAuthProvider.credentialFromResult(re);
				localStorage.setItem("accessToken", credential2.accessToken);
				localStorage.setItem("secret", credential2.secret);
				
				const twitProf = {
					'name': re._tokenResponse.displayName,
					'profileName': re._tokenResponse.screenName,
					'picture': re._tokenResponse.photoUrl
				}
				setProfile(twitProf);
			})
			.catch((err)=>{
				console.log('Login Failed:', err);
			})
		}
	}

	// eslint-disable-next-line
	useEffect(autoSignIn,[]) 
	
	const twitterLogin = ()=>{
		signInWithPopup(auth, provider)
		.then((re)=>{
			const credential = TwitterAuthProvider.credentialFromResult(re);

			localStorage.setItem("accessToken", credential.accessToken);
			localStorage.setItem("secret", credential.secret);

			console.log(credential);

			const twitProf = {
				'name': re._tokenResponse.displayName,
				'profileName': re._tokenResponse.screenName,
				'picture': re._tokenResponse.photoUrl
			}
			setProfile(twitProf);
			
		})
		.catch((err)=>{
			console.log('Login Failed:', err);
		})
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