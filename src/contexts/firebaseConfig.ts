import firebase from "firebase";

// Initialize Cloud Firestore through Firebase
const firebaseConfig = {
	apiKey: "AIzaSyDdzbuW6L4GisdoQkpE63lNBfhDnEZKIRA",
	authDomain: "arguments-for-god.firebaseapp.com",
	databaseURL: "https://arguments-for-god.firebaseio.com",
	projectId: "arguments-for-god",
	storageBucket: "arguments-for-god.appspot.com",
	messagingSenderId: "1043844223727",
	appId: "1:1043844223727:web:034b1be98973741da9811a",
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();