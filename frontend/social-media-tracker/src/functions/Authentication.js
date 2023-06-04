import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase-config";


const Authentication = () => {
	const [authenticatedUser, setauthenticatedUser] = useState('');
	
	useEffect(() => {
		const listenAuth = onAuthStateChanged(auth, (user) => {
			if(user) {
				setauthenticatedUser(user)
			} else {
				setauthenticatedUser(false)
			}
		})

		return () => {
			listenAuth();
		}
	},[])

	const userSignOut = () => {
		signOut(auth)
		.then(() => {
			console.log("Logged out");
		})
		.catch(err => {
			console.log("Error logging out", err)
		})
	}

	return authenticatedUser;
}

export default Authentication