import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase-config'

async function getUserDocument(id) {
	return (
	  new Promise(async (resolve, reject) => {
		if((await getDoc(doc(db, `/test/${id}`))).data() == undefined) {
			resolve(false)
		} else {
			await getDoc(doc(db, `/test/${id}`))
			.then((q) => {
				resolve(q)
			})
			.catch((err) => {
			reject(err)
			})
		}
	  }
	) 
)}

async function createUserDocument(id, data) {
	return (
	  new Promise(async (resolve, reject) => {
		if(!doc(db, `/test/${id}`).exists) {
			await setDoc(doc(db, `/test/${id}`), data)
			resolve(true)
		} else {
			resolve(false)
		}
	  }
	) 
)}

export { getUserDocument, createUserDocument }