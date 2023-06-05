import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase-config'
import Authentication from './Authentication'

async function getUserDocument(id) {
	return (
	  new Promise(async (resolve, reject) => {
		if((await getDoc(doc(db, `/test/${id}`))).data() === undefined) {
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

const createNewUser = () => {
    var userInfo = Authentication();
    if(userInfo) {
      try {
        getUserDocument(userInfo.uid)
        .then((document) => {
          if(document === false) {
            const data = {
              uid: userInfo.uid,
              username: userInfo.displayName,
              accountName: userInfo.reloadUserInfo.screenName,
              stats: []
            }
            createUserDocument(userInfo.uid, data).then(()=>{
				return true;
			})
          }
        })
        .catch((err) => {
			console.log(err);
        })
		} catch (err) {
			console.log(err);
		}
	}
	return false;
}

const readUser = () => {
	var userInfo = Authentication();
    if(userInfo) {
      try {
        getUserDocument(userInfo.uid)
        .then((document) => {
          if(document === false) {
            return false;
          } else {
            return document.data();
          }
        })
        .catch((err) => {
          console.log(err);
        })
      } catch (err) {
        console.log(err);
      }
    }
}

export { getUserDocument, createUserDocument, createNewUser, readUser }