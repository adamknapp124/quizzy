'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import {
	onAuthStateChanged,
	signInWithPopup,
	GoogleAuthProvider,
	signInAnonymously,
	signOut,
} from 'firebase/auth';
import { auth } from '@/app/actions/firebase'; // Ensure auth is correctly exported from your Firebase config

const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user);
		});

		return unsubscribe;
	}, []);

	const signInWithGoogle = async () => {
		const provider = new GoogleAuthProvider();

		try {
			await signInWithPopup(auth, provider);
		} catch (error) {
			console.error('Error signing in with Google: ', error);
		}
	};

	const signInAsGuest = async () => {
		try {
			const result = await signInAnonymously(auth);
			const user = result.user;
			console.log('Guest Signed in:', user);
		} catch (error) {
			console.error('Error signing in as guest:', error);
		}
	};

	const logOut = async () => {
		try {
			await signOut(auth);
		} catch (error) {
			console.error('Error signing out: ', error);
		}
	};

	return (
		<AuthContext.Provider value={{ user, signInWithGoogle, signInAsGuest, logOut }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	return useContext(AuthContext);
}
