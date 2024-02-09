//AÑADE TUS ENLACES DE FIREBASE

//import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDnrUGi3x2C_OeXDr7n-BVLHXco-EcBZy8",
  authDomain: "chatis-c1797.firebaseapp.com",
  projectId: "chatis-c1797",
  storageBucket: "chatis-c1797.appspot.com",
  messagingSenderId: "603839202146",
  appId: "1:603839202146:web:3086c0432849cf1955a23b",
  measurementId: "G-QRQ2MMF8NQ"
};
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
    console.log("usuario"+user_name);
    document.getElementById("user_name").innerHTML="Hola " + user_name;

//const app = initializeApp(firebaseConfig);

    
function getData() {
      firebase.database().ref("/").on('value', 
      function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(
                  function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
console.log("sala " + room_names);
row="<div class='room_name' id="+ Room_names+" onclick='redirectTo(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //Final del código
      });});}
getData();
function addRoom(){
      Room_names=document.getElementById("Room_name").value;
      firebase.database().ref("/").child(Room_names).update({purpose:"Sala añadida"});
      localStorage.setItem("room_name", Room_names);
      window.location.replace("Mensajes.html");
}
function logout(){
      localStorage.removeItem("user_name;")
      window.location.replace("index.html");
}
function redirectToRoomName(){
      localStorage.setItem("room_name", Room_names);
      window.location.replace("Mensajes.html");   
}