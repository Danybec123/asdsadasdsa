var firebaseConfig = {
    apiKey: "AIzaSyCDmYPHWLjIbt9bkiuH1BweN2KSw4hvnTs",
    authDomain: "waza-ca1a5.firebaseapp.com",
    databaseURL: "https://waza-ca1a5-default-rtdb.firebaseio.com",
    projectId: "waza-ca1a5",
    storageBucket: "waza-ca1a5.appspot.com",
    messagingSenderId: "745528911923",
    appId: "1:745528911923:web:6284d4acac7c5ae80f9b46"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function click(){
    var clickear = document.getElementById("imput").value
    firebase.database().ref("/").child(clickear).update({
     purpose:"play"
    })
}