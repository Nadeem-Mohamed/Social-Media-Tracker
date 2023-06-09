import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase-config'

const path = '/users/'

async function getUserDocument(id) {
	return (
	  new Promise(async (resolve, reject) => {
		if((await getDoc(doc(db, `${path + id}`))).data() === undefined) {
			resolve(false)
		} else {
			await getDoc(doc(db, `${path + id}`))
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
		if(!doc(db, `${path + id}`).exists) {
			await setDoc(doc(db, `${path + id}`), data)
			resolve(true)
		} else {
			resolve(false)
		}
	  }
	) 
)}

async function createNewUser(userInfo) {
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

async function readUser(userInfo) {
	return(
		new Promise(async (resolve, reject) => {
			if(userInfo) {
			try {
				getUserDocument(userInfo.uid)
				.then((document) => {
				if(document === false) {
					resolve(false)
				} else {
					resolve(document.data())
				}
				})
				.catch((err) => {
				console.log(err);
				})
			} catch (err) {
				console.log(err);
			}
			}
		})
	)
}

export { getUserDocument, createUserDocument, createNewUser, readUser }