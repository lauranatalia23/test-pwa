import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCl_EgIGc_c65gvx2N1Rsyjz1tASQxr7ek",
    authDomain: "react-rs-pwa.firebaseapp.com",
    databaseURL: "https://react-rs-pwa.firebaseio.com",
    projectId: "react-rs-pwa",
    storageBucket: "react-rs-pwa.appspot.com",
    messagingSenderId: "323213535243"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;

firebase.firestore().enablePersistence()
  .catch(function(err) {
      if (err.code === 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code === 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });