import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyBfC5q8Ww9Sk6BBdRZbGa5VPd_KTUQoEeo",
  authDomain: "x5-resonant-ward-4.firebaseapp.com",
  databaseURL: "https://x5-resonant-ward-4.firebaseio.com",
  projectId: "x5-resonant-ward-4",
  storageBucket: "",
  messagingSenderId: "465851319200"
};
firebase.initializeApp(config);

export const getSavedPlaces = () =>
  firebase
    .database()
    .ref("places/")
    .once("value")
    .catch(err => {
      alert(err);
    });

export const putPlaces = places =>
  firebase
    .database()
    .ref("places/")
    .set(places)
    .catch(err => {
      alert(err);
    });
