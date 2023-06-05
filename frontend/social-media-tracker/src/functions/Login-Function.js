import { signInWithPopup, signInWithCredential, TwitterAuthProvider, signOut } from "firebase/auth";
import { auth } from '../firebase-config'
import { createNewUser } from "./Database-Functions";

const provider = new TwitterAuthProvider();

const logoutTwitter = () => {
	localStorage.removeItem("accessToken")
	localStorage.removeItem("secret")
	signOut(auth)
	.then(() => {
		console.log("Logged out");
	})
	.catch(err => {
		console.log("Error logging out", err)
	})
};

function loginTwitter() {
 return new Promise((resolve, reject) => {
		var accessToken = localStorage.getItem("accessToken")
		var secret = localStorage.getItem("secret")
		
		if(accessToken == null) {
			signInWithPopup(auth, provider)
			.then((re)=>{
				const credential = TwitterAuthProvider.credentialFromResult(re);

				localStorage.setItem("accessToken", credential.accessToken);
				localStorage.setItem("secret", credential.secret);
				createNewUser();
				resolve(re)				
			})
			.catch((err)=>{
				console.log('Login Failed:', err);
				reject();
			})
		} else {
			var cred = TwitterAuthProvider.credential(accessToken, secret);

			signInWithCredential(auth, cred)
			.then((re)=>{
				const credential = TwitterAuthProvider.credentialFromResult(re);
				localStorage.setItem("accessToken", credential.accessToken);
				localStorage.setItem("secret", credential.secret);
				resolve(re)				
			})
			.catch((err)=>{
				console.log('Login Failed:', err);
				reject();
			})
		}
	})
}

export {loginTwitter, logoutTwitter}