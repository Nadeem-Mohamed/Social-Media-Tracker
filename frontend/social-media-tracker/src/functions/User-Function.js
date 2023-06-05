import { readUser, createNewUser } from "./Database-Functions"
import { auth } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";

export default function setNewUser() {
	onAuthStateChanged(auth, (user) => {
		if (user) {
			readUser(user)
			.then((userData) => {
				console.log(userData)
				try {
					if(userData === false) {
						createNewUser(user)
					}
				} catch (err) {
					console.log(err)
				}
			})
		} else {
		  return false;
		}
	})
	
}