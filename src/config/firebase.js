
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth , GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {doc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyAz9-qLD1eVVyNr_KRmgGg_ND-HhNo1NEE",
  authDomain: "chatapp-gs-810ad.firebaseapp.com",
  projectId: "chatapp-gs-810ad",
  storageBucket: "chatapp-gs-810ad.appspot.com",
  messagingSenderId: "118855347714",
  appId: "1:118855347714:web:42751a9b5f427f7acd011b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      username: username.toLowerCase(),
      email,
      name: "",
      avatar: "",
      bio: "votre biographie",
      lastSeen:Date.now()
    })
    await setDoc(doc(db, "chats", user.uid), {
      chatData: []
    })

  } catch (error) {
    console.error(error)
    toast.error(error.code)
  }
};
const googleSignIn = async () => {
  const provider = new GoogleAuthProvider(); // Utilise Google comme fournisseur
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("Utilisateur connecté via Google :", user);

    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      username: user.displayName.toLowerCase(),
      email: user.email,
      name: user.displayName,
      avatar: user.photoURL,
      bio: "votre biographie",
      lastSeen: Date.now()
    });
    console.log("Données utilisateur enregistrées après connexion via Google.");
    
  } catch (error) {
    console.error("Erreur Google Sign-In :", error);
    toast.error(error.code);
  }
};
export{signup,googleSignIn}