import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAe3T3GP7eoHR3F371fXhFDiFznL8bAymE",
    authDomain: "calqui-4081f.firebaseapp.com",
    databaseURL: "https://calqui-4081f.firebaseio.com",
    projectId: "calqui-4081f",
    storageBucket: "calqui-4081f.appspot.com",
    messagingSenderId: "670955610271",
    appId: "1:670955610271:web:d2b76fd01a409c96f882aa"
  };

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export {auth}