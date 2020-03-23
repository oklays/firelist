# Firelist App (Firebase + React Native)
ini adalah prototype aplikasi mobile **TodoList** yang dibuat menggunakan React Native dan mengintegrasikannya dengan Realtime database nya Firebase, semoga bermanfaat untuk kamu yang ingin belajar mengitegrasikan React Native dengan Firebase...

# Instalation

1. Buka CMD, masuk ke directory project lalu jalankan perintah berikut :

> npm install


2. Buka file `src/firebase.config.js` dan ubah pada bagian ini sesuai dengan konfigurasi firebase kamu masing-masing:
```
const firebaseConfig = {
  apiKey: 'AIzaSyCDQu3Mz7zeSWfueXvgz3O_cRqJw2Ix_-g',
  authDomain: 'octo-puz.firebaseapp.com',
  databaseURL: 'https://octo-puz.firebaseio.com',
  projectId: 'octo-puz',
  storageBucket: 'octo-puz.appspot.com',
  messagingSenderId: '371590440645',
  appId: '1:371590440645:web:42f4a5447182086f29f2ac',
  measurementId: 'G-F9YQ828R89',
};

```

3. Hubungkan smartphone anda, atau bisa gunakan emulator

4. Jalankan perintah berikut : 

> react-native run-android
