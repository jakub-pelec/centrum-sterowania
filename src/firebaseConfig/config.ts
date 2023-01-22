import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCgVIT0KWDHJUtyAJ0p8vILO5kCjE4HY0Y',
	authDomain: 'centrum-sterowania.firebaseapp.com',
	databaseURL: 'https://centrum-sterowania.firebaseio.com',
	projectId: 'centrum-sterowania',
	storageBucket: 'centrum-sterowania.appspot.com',
	messagingSenderId: '357780754005',
	appId: '1:357780754005:web:c298af6c2f1bc7ea314edc',
};

export const app = initializeApp(firebaseConfig);
