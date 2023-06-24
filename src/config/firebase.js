import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_kQ71-VeRKxQ6w46leeMga3Nojlte_wY",
  authDomain: "appregistro-e3289.firebaseapp.com",
  projectId: "appregistro-e3289",
  storageBucket: "appregistro-e3289.appspot.com",
  messagingSenderId: "59934219221",
  appId: "1:59934219221:web:f9dea66a849a0ad180bb5c",
};

// Lembre-se de exportar as variáveis 
// para que possam ser usadas em outros arquivos
// Exemplo: import { auth } from './config/firebase';
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


