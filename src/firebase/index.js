// import firebase
import firebase from "firebase/app";
import 'firebase/analytics';
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyB6dCisBTXJ0GWZHUKJuSKgg5lIM8-PYvo",
	authDomain: "ecommerce-vue-887fa.firebaseapp.com",
	databaseURL: "https://ecommerce-vue-887fa.firebaseio.com",
	projectId: "ecommerce-vue-887fa",
	storageBucket: "ecommerce-vue-887fa.appspot.com",
	messagingSenderId: "608911980421",
	appId: "1:608911980421:web:b937fe2dc409e3916cb6ec",
	measurementId: "G-7YXNTSGS9Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
export const storage = firebase.storage();