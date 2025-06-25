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

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [redirectPath, setRedirectPath] = useState('/');

  // Login section
  const logIn = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log('User logged in:', userCredential.user);
      return userCredential;
    } catch (error) {
      setLoading(false);
      console.error('Error during login:', error);
      throw error;
    }
  };
  // Login section

  // Logout section
  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      console.log('User signed out successfully');
      return true;
    } catch (error) {
      console.error('Error signing out:', error);
      setLoading(false);
      throw error;
    }
  };
  // Logout section

  // Register section
  const register = async (email, password, name, photoURL) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log('User created:', userCredential.user);
      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL: photoURL,
      });
      console.log('Profile updated. New user data:', user);
      setLoading(false);
      return userCredential;
    } catch (error) {
      setLoading(false);
      console.error('Error creating user:', error);
      throw error;
    }
  };

  // Register section

  // Google Login section
  const googleSignIn = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider).finally(() => setLoading(false));
  };

  // Google Login section

  // Magnage User Section
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser ? { ...currentUser } : null);
      setLoading(false);
    });
    return () => {
      console.log('Auth state listener unsubscribed');
      unsubscribe();
    };
  }, []);
  // Magnage User Section

  const value = {
    user,
    loading,
    register,
    redirectPath,
    setRedirectPath,
    googleSignIn,
    logOut,
    logIn,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
