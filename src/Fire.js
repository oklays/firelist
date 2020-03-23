import firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBvN6kjSVoeu76OSqjtrvbYDHsznSsKivI',
  authDomain: 'todolistapp-4dcc5.firebaseapp.com',
  databaseURL: 'https://todolistapp-4dcc5.firebaseio.com',
  projectId: 'todolistapp-4dcc5',
  storageBucket: 'todolistapp-4dcc5.appspot.com',
  messagingSenderId: '919777856800',
  appId: '1:919777856800:web:5a40e03a70f51c45535b45',
  measurementId: 'G-PQV0QVS2RH',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.database();
export const firebaseAuth = firebase.auth();

export const signIn = () => {
  firebaseAuth
    .signInAnonymously()
    .then(() => console.log('Login Berhasil'))
    .catch(error => {
      console.log('Login Error : ' + error);
    });
};

export const getTodos = callback => {
  let todosRef = db.ref('Todos');
  todosRef.on('value', successData, err);
  return todosRef;
};

// export const getTodosSuccess = todos => {
//   console.log(todos.val());
//   return todos.val();
// };

// const callbackError = err => {
//   console.log(err);
// };

// export const getTodos = callback => {
//   let todosRef = db.ref('Todos');
//   todosRef.on('value', getTodosSuccess, callbackError);
//   return getTodosSuccess()
// };
