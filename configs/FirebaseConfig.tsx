import { initializeApp } from 'firebase/app';
//@ts-ignore
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCcQrTUDgIJ6yk1S8xT0puGuLyWuC1p1Kg",
    authDomain: "campus-guru-ae459.firebaseapp.com",
    projectId: "campus-guru-ae459",
    storageBucket: "campus-guru-ae459.firebasestorage.app",
    messagingSenderId: "701870763999",
    appId: "1:701870763999:web:b75ec227319ce7e6361e6a",
    measurementId: "G-TTQFL1HW62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with React Native persistence
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };

// const analytics = getAnalytics(app);