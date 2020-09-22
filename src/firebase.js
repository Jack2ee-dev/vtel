import * as firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyDgwEFLMxmxR3zWr4Qhru2EVgC0yUEmn6k',
  authDomain: 'vtel-8d094.firebaseapp.com',
  databaseURL: 'https://vtel-8d094.firebaseio.com/',
  projectId: 'vtel-8d094',
};

firebase.initializeApp(config);

const database = firebase.database();

export { database, config };
