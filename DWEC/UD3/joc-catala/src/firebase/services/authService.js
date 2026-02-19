import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged 
} from "firebase/auth";

import { auth } from "../firebase";

// Registrar l'usuari
export function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

// Login
export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

// Logout
export function logout() {
    return signOut(auth);
}

// Escoltar els canvis d'autenticació
export function listenAuthChanges(callback) {
    return onAuthStateChanged(auth, callback);
}