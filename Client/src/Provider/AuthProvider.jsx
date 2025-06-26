// src/Provider/AuthProvider.jsx

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import AuthContext from './AuthContext';
import auth from './../Firebase/firebase.init';
import { useEffect, useState } from 'react';
import FullPageLoader from '../Components/Custom/FullPageLoader';
// 1. Import the new loader

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // This `loading` is key!
  const [redirectPath, setRedirectPath] = useState('/');

  // ... (your existing login, logout, register functions remain the same)
  const logIn = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };
  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      return true;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };
  const register = async (email, password, name, photoURL) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL: photoURL,
      });
      setLoading(false);
      return userCredential;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };
  const googleSignIn = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider).finally(() => setLoading(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser ? { ...currentUser } : null);
      setLoading(false); // Firebase is done checking, set loading to false.
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    user,
    loading, // We pass this down so other components can know if auth is loading
    register,
    redirectPath,
    setRedirectPath,
    googleSignIn,
    logOut,
    logIn,
  };

  // 2. The Magic Trick!
  // If auth state is loading, show the full-page loader and NOTHING else.
  // The `children` (your entire app) will not be rendered until loading is false.
  return (
    <AuthContext.Provider value={value}>
      {loading ? <FullPageLoader /> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
