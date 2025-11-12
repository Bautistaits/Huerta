
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDduz1xgu5h1XLAwdUlZiSTjEGVBruNcEc",
  authDomain: "huertabautib2025.firebaseapp.com",
  databaseURL: "https://huertabautib2025-default-rtdb.firebaseio.com",
  projectId: "huertabautib2025",
  storageBucket: "huertabautib2025.firebasestorage.app",
  messagingSenderId: "343024320955",
  appId: "1:343024320955:web:cbcf119fcb83fa4e79c49e"
};


const app = initializeApp(firebaseConfig);
let parrafo = document.querySelector("p");

const refDatos = ref(db, "huerta");

onValue(refDatos, (snapshot) => {
    console.log(snapshot.val())
    let huerta = snapshot.val()
    parrafo.textContent = `La huerta tiene una temperatura en el suelo de ${huerta.tempSuelo}° y de humedad de ${huerta.humSuelo}`
    
   
})