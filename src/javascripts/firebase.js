 // Initialize Firebase
 var config = {
   apiKey: "AIzaSyCyYF2b85JpYbx1cooAPvAcGpCE35A6nQM",
   authDomain: "tejiendo-en-azul-fc211.firebaseapp.com",
   databaseURL: "https://tejiendo-en-azul-fc211.firebaseio.com",
   projectId: "tejiendo-en-azul-fc211",
   storageBucket: "tejiendo-en-azul-fc211.appspot.com",
   messagingSenderId: "364199944133"
 };
 firebase.initializeApp(config);

 //Registro de nuevo usuario por correo electrónico
 const newUserButton = document.getElementById('new-user');
 const register = document.getElementById('register');
 const login = document.getElementById('login');

 newUserButton.addEventListener('click', () => {
   const userEmail = document.getElementById('email').value;
   const password = document.getElementById('password').value;
   firebase.auth().createUserWithEmailAndPassword(userEmail, password)
     .then(() => {
       verifyEmail();
     }).catch(function (error) {

       // Handle Errors here.
       const errorCode = error.code;
       const errorMessage = error.message;
       // ...
       alert(errorCode);
       alert(errorMessage);
     })
 })

 // Verificar correo de nuevo usuario
 const verifyEmail = () => {
   const user = firebase.auth().currentUser;

   user.sendEmailVerification().then(() => {
     // Email sent.
     alert('Por favor revisa tu correo electrónico, necesitamos verificar que realmente eres la propietaria del correo que ingresaste')
   }).catch((error) => {
     // An error happened.
     console.log(error);
   });
 }

 //  Ingreso de usuarios existentes
 const knownUserButton = document.getElementById('known-user');

 knownUserButton.addEventListener('click', () => {
   const knownEmail = document.getElementById('known-email').value;
   const knownPassword = document.getElementById('known-password').value;
   firebase.auth().signInWithEmailAndPassword(knownEmail, knownPassword).catch(function (error) {
     // Handle Errors here.
     var errorCode = error.code;
     var errorMessage = error.message;
     alert(errorCode);
     alert(errorMessage);
     // ...
   });
 })

 // lo que se va a ejecutar si el usuario está activo:


 //Función de observador de estado de usuarios
//  const menu = 
 const observerFn = () => {
   firebase.auth().onAuthStateChanged((user) => {
     if (user) {
       // User is signed in.
       const displayName = user.displayName;
       const email = user.email;
       const emailVerified = user.emailVerified;
       const photoURL = user.photoURL;
       const isAnonymous = user.isAnonymous;
       const uid = user.uid;
       const providerData = user.providerData;
       console.log('hay usuario activo')
       console.log(user.emailVerified)
       if (user.emailVerified) {
        document.getElementById('general-menu').classList.remove('hide');
        //  document.getElementById('login').classList.remove('active'); 
        window.location.replace("#profile");
         
       }
       // ...
     } else {
       console.log('no hay usuario activo')
       uid = null;
       document.getElementById('general-menu').classList.add('hide');
      //  document.getElementById('login').classList.add('active');
       window.location.replace("#login");
       
       // User is signed out.
       // ...
     }
   })
 }
 observerFn();

 // Cerrar sesión
 const logOut = () => {
   firebase.auth().signOut();
 }

 const logOutButton = document.getElementById('logout');
 logOutButton.addEventListener('click', () => {
   logOut();

 })