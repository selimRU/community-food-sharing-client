
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


// // FB_APIKEY=AIzaSyC_qnygIK6AV6_h5O_9wa2IeXDpUPmMZwM
// // FB_AUTHDOMAIN=community-food-sharing-70abe.firebaseapp.com
// // FB_PROJECTID=community-food-sharing-70abe
// // FB_STORAGEBUCKET=community-food-sharing-70abe.appspot.com
// // FB_MESSAGINGSENDERID=206514501905
// // FB_APPID=1:2

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC_qnygIK6AV6_h5O_9wa2IeXDpUPmMZwM",
//   authDomain: "community-food-sharing-70abe.firebaseapp.com",
//   projectId: "community-food-sharing-70abe",
//   storageBucket: "community-food-sharing-70abe.appspot.com",
//   messagingSenderId: "206514501905",
//   appId: "1:206514501905:web:7100e1318e6eb0070274b0"
// // };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// apiKey: import.meta.env.APIKEY,
//     authDomain: import.meta.env.AUTHDOMAIN,
//     projectId: import.meta.env.PROJECTID,
//     storageBucket: import.meta.env.STORAGEBUCKET,
//     messagingSenderId: import.meta.env.MESSAGINGSENDERID,
//     appId: import.meta.env.APPID,