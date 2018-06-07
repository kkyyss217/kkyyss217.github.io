function setupFirebase(){
    //Initialize Firebase
    var config = {
        apiKey: "AIzaSyAGI3fmbZEFoEX7pIUTgLMXevaOPP5KEAI",
        authDomain: "my2018-choi.firebaseapp.com",
        databaseURL: "https://my2018-choi.firebaseio.com",
        projectId: "my2018-choi",
        storageBucket: "my2018-choi.appspot.com",
        messagingSenderId: "602175635038"
    };
    firebase.initializeApp(config);

    //check login
    var fa = firebase.auth();
    fa.onAuthStateChanged(firebaseUser=>{
        console.log(firebaseUser);
    });

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
        // User is signed in.
    
        document.getElementById("user_div").style.display = "block";
        document.getElementById("login_div").style.display = "none";
    
        var user = firebase.auth().currentUser;
    
        if(user != null){
    
            var email_id = user.email;
            document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
    
        }
    
        } else {
        // No user is signed in.
    
        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";
    
        }
    });
}

window.onload = function(){
    setupFirebase();
    //alert("ok");
    var btnCreate = document.querySelector("#btn_create");
    //btnSave.onclick = fucntion(){}   //old style
    btnCreate.addEventListener("click",function(){
        //alert("ok");
        var user = document.querySelector("#email").value;
        var password = document.querySelector("#password").value;

        console.log(user);
        console.log(password);

        var fa = firebase.auth();
        fa.createUserWithEmailAndPassword(user,password);
    });
/*
    var btnLogin = document.querySelector("#btn_login");
    btnLogin.addEventListener("click",function(){
        //alert("ok");
        var user = document.querySelector("#email").value;
        var password = document.querySelector("#password").value;

        console.log(user);
        console.log(password);

        var fa = firebase.auth();
        fa.signInWithEmailAndPassword(user,password);
        console.log("User login");
    });

    var btnLogout = document.querySelector("#btn_logout");
    btnLogout.addEventListener("click",function(){
        firebase.auth().signOut();
        console.log("User logout");
    });
    */
}

function login(){

  var userEmail = document.getElementById("email").value;
  var userPass = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}