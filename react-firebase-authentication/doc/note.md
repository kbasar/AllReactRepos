
//Copy and paste these scripts into the bottom of your <body> tag, but before you use any Firebase services:
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyACPrYJjpLq3pJnJsBPKqH0UoHF1YwP2fo",
    authDomain: "mvp-project-2f05d.firebaseapp.com",
    projectId: "mvp-project-2f05d",
    storageBucket: "mvp-project-2f05d.appspot.com",
    messagingSenderId: "998310978995",
    appId: "1:998310978995:web:2a4aee22352c2e7fc897c6",
    measurementId: "G-JQ4LJQKYQE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>