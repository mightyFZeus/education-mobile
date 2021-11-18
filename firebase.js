import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyClsOKZJuyxzUwub20QeaMhbJ90TJ-mKuc",
    authDomain: "navigation-3dd4e.firebaseapp.com",
    projectId: "navigation-3dd4e",
    storageBucket: "navigation-3dd4e.appspot.com",
    messagingSenderId: "361714966324",
    appId: "1:361714966324:web:b0f84ab46cf532dd044f61",
});

export const auth = app.auth();
export default app;
