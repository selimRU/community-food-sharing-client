
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
// web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_qnygIK6AV6_h5O_9wa2IeXDpUPmMZwM",
    authDomain: "community-food-sharing-70abe.firebaseapp.com",
    projectId: "community-food-sharing-70abe",
    storageBucket: "community-food-sharing-70abe.appspot.com",
    messagingSenderId: "206514501905",
    appId: "1:206514501905:web:7100e1318e6eb0070274b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)