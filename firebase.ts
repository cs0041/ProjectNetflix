// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDDthjFf5Y6kOnBIC1cr3AP3hmJTkRokZ8',
  authDomain: 'netflix-ce507.firebaseapp.com',
  projectId: 'netflix-ce507',
  storageBucket: 'netflix-ce507.appspot.com',
  messagingSenderId: '936524005965',
  appId: '1:936524005965:web:eab01963e341ea63709204',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
