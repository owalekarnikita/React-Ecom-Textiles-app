import { initializeApp } from "firebase/app";
import { getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { getFirestore,doc, getDoc, setDoc } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQD2RH-sGfgXuYWD9xAhHWyp5OLryutcU",
  authDomain: "ecom-textiles-app.firebaseapp.com",
  projectId: "ecom-textiles-app",
  storageBucket: "ecom-textiles-app.appspot.com",
  messagingSenderId: "1093632669515",
  appId: "1:1093632669515:web:54e84952f1758811011ace"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.getCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);


export const db = getFirestore();
// for above have to create database in firebase for this add production database and select location

export const createUserDocumentFromAuth = async (userAuth) => {

    // userAuth.uid is id get from user details from google server as google login and then user unique id from response 
    const userDocRef = doc(db,'users',userAuth.uid);
    console.log(userDocRef, "userDocREf");

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot,userSnapshot.exists(),"userSnapshot");

    if(!userSnapshot.exists())
    {
      const {email, displayName} = userAuth;
      const dataCreate = new Date();

      try {
        await setDoc(userDocRef,{ displayName,email,dataCreate});

      }
      catch (err) {
        console.log(err,"error")
      }
    }


}


//create firebase new project after that yop ll get above dataonly initializeApp data 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries