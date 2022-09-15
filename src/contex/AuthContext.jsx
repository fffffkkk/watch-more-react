import React, {createContext, useContext, useEffect, useState} from 'react'
import { 
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged
} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

const AuthContext = () => {
	return (
		<div>
			
		</div>
	)
}

export default AuthContext
