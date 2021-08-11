import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
export const firebaseConfig = {
    apiKey: "AIzaSyCR0HCr5oPVW6rHzbq8w2wP6rWoBgf8plY",
    authDomain: "phone-shop-a828b.firebaseapp.com",
    projectId: "phone-shop-a828b",
    storageBucket: "phone-shop-a828b.appspot.com",
    messagingSenderId: "273063421786",
    appId: "1:273063421786:web:421f534829021a230e3563",
    measurementId: "G-MZ6F0XGGVQ"
};
export let firestore


export const initFirebase = ()=>{
    firebase.initializeApp(firebaseConfig);
    firestore = firebase.firestore()
}
export const signInWithEmailAndPassword=(email,password)=>{
    return firebase.auth().signInWithEmailAndPassword(email,password)
}
export const createUserWithEmailAndPassword = (email,password)=>{
    return firebase.auth().createUserWithEmailAndPassword(email,password)
}
export const sendEmailVerification = ()=>{
   return firebase.auth().currentUser.sendEmailVerification()
}
export const signOut = ()=>{
    return firebase.auth().signOut()
}
export const onAuthStateChanged = (cb)=>{
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            cb(user)
        }
        else{
            cb(null)
        }
    })
}
export const currentUser = ()=>{

    return firebase.auth().currentUser

}
export const arrayUnion = firebase.firestore.FieldValue.arrayUnion

