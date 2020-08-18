import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var Firebase = {
  apiKey: 'AIzaSyBKkwUyFnI6sOGx4s54QdvRGC7h5L5LdbE',
  authDomain: 'e-commerce-92b6e.firebaseapp.com',
  databaseURL: 'https://e-commerce-92b6e.firebaseio.com',
  projectId: 'e-commerce-92b6e',
  storageBucket: 'e-commerce-92b6e.appspot.com',
  messagingSenderId: '557435467013',
  appId: '1:557435467013:web:c21c4026e86dc0ea95336c',
  measurementId: 'G-42K3G5E7QH',
};
const fb = firebase.initializeApp(Firebase);
export const db = fb.firestore();
