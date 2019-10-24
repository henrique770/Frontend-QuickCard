import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: 'AIzaSyBVkZZ0rNSQ1-jJsHB51SDhw4r2_Eqq8UY',
  authDomain: 'quick-card-7384d.firebaseapp.com',
  databaseURL: 'https://quick-card-7384d.firebaseio.com',
  projectId: 'quick-card-7384d',
  storageBucket: 'quick-card-7384d.appspot.com',
  messagingSenderId: '994385857118',
  appId: '1:994385857118:web:a028677a9a0fc6449bc2cf',
  measurementId: 'G-GBHFZLCTNJ',
});
firebase.analytics();

ReactDOM.render(<App />, document.getElementById('quickcard-container'));
