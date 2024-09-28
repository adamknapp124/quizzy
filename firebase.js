const firebaseConfig = {
	apiKey: 'AIzaSyANnchokUo6CCz5VPnrALinahy8r14K2z0',
	authDomain: 'quizzy-f7040.firebaseapp.com',
	projectId: 'quizzy-f7040',
	storageBucket: 'quizzy-f7040.appspot.com',
	messagingSenderId: '117694411059',
	appId: '1:117694411059:web:a1fded6cc786bf6aaace46',
	measurementId: 'G-9TJ5HBWC5S',
};

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (typeof window !== 'undefined') {
	// Ensure that the environment is the browser
	try {
		const analytics = getAnalytics(app);
	} catch (error) {
		console.error('Error initializing analytics:', error);
	}
}

export const auth = getAuth(app);
