import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCpjzXjitmriHZD5uTe47VCGG-D0See5OA",
  authDomain: "chat-it-up-f6671.firebaseapp.com",
  projectId: "chat-it-up-f6671",
  storageBucket: "chat-it-up-f6671.appspot.com",
  messagingSenderId: "598204048931",
  appId: "1:598204048931:web:7689f69ade52fd3151f396"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();