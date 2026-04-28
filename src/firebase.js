import { initializeApp } from 'firebase/app'
import { getDatabase }   from 'firebase/database'
import { getAuth }       from 'firebase/auth'

const FIREBASE_CONFIG = {
  apiKey:            'AIzaSyDzJsJYfTcWaeC5f43EXG-brzAaY7_BBk8',
  authDomain:        'seep-7fe1d.firebaseapp.com',
  databaseURL:       'https://seep-7fe1d-default-rtdb.firebaseio.com',
  projectId:         'seep-7fe1d',
  storageBucket:     'seep-7fe1d.firebasestorage.app',
  messagingSenderId: '681624379623',
  appId:             '1:681624379623:web:d9e10ac7318f96e98d0242',
}

const app = initializeApp(FIREBASE_CONFIG)
export const DB   = getDatabase(app)
export const auth = getAuth(app)
