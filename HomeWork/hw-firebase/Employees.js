//app.js

var koreanAge;
var age;

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

    var ref = firebase.database().ref("Customers");

    //when child is added
    ref.on("child_added",function(snap){
        //snap contains the entire students node.
        var list = document.querySelector("#list");
/*
        var btday = new Date("birthday");
        var today = new Date();
        var years = today.getFullYear() - birthday.getFullYear();
        // Reset birthday to the current year.
        birthday.setFullYear(today.getFullYear());

        // If the user's birthday has not occurred yet this year, subtract 1.
        if (today < birthday){
            years--;
        }
        // Output: You are <number of years> years old.
*/
        const tr = document.createElement("tr");
        const td_id = document.createElement("td");
        const td_lastname = document.createElement("td");
        const td_firstname = document.createElement("td");
        const td_birthday = document.createElement("td");
        const td_age = document.createElement("td");
        const td_position = document.createElement("td");
        const td_action = document.createElement("td");
        const action = document.createElement("a");

        td_id.innerText = snap.child("id").val();
        td_lastname.innerText = snap.child("lastname").val();
        td_firstname.innerText = snap.child("firstname").val();
        td_birthday.innerText = snap.child("birthday").val();
        td_age.innerText = koreanAge;
        td_position.innerText = snap.child("position").val();

        action.innerText = "Delete";
        action.href="#";
        action.onclick=function(){
            //alert(this.parentElement.parentElement.id);   
            
            // <a href="#">   --->   parent : td   --->   parent : tr
            var prod_id = this.parentElement.parentElement.id;
            var product = firebase.database().ref("Customers").child(prod_id);
            product.remove();
            var tr_del = document.querySelector("#" + prod_id);
            tr_del.remove();
            }
        td_action.appendChild(action);

        tr.appendChild(td_id);
        tr.appendChild(td_lastname);
        tr.appendChild(td_firstname);
        tr.appendChild(td_birthday);
        tr.appendChild(td_age);
        tr.appendChild(td_position);
        tr.appendChild(td_action);

        tr.id = snap.key;
        list.appendChild(tr);
        //console.log(snap);
    });
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
        // User is signed in.
    
        href="Index.html";

        if(user != null){
            var email_id = user.email;
            document.getElementById("user_para").innerHTML = "User Email : " + email_id;
        }
    
        } else {
        // No user is signed in.

        }
    });
}

window.onload = function(){
    setupFirebase();
    //alert("ok");
    var btnSave = document.querySelector("#button_save");
    //btnSave.onclick = fucntion(){}   //old style
    btnSave.addEventListener("click",function(){
        //alert("ok");
        var id = document.querySelector("#id").value;
        var lastname = document.querySelector("#lastname").value;
        var firstname = document.querySelector("#firstname").value;
        var birthday = document.querySelector("#birthday").value;
        var position = document.querySelector("#position").value;

        console.log(id);
        console.log(lastname);
        console.log(firstname);
        console.log(birthday);
        console.log(position);

        firebase.database().ref().child("Customers").push().set(
            {
                //  firebase : source in code
                id:id,
                lastname:lastname,
                firstname:firstname,
                birthday:birthday,
                position,position
            }
        );
    });
}

function tablesort(n){ //성 정렬, 이름 정렬, 생일 정렬 총 3개만들기
    var table,  rows, switching, i, x, y,shouldswitch, dir, switchcount = 0;

    table  = document.getElementById("list");
    switching = true;
   
    dir = "asc"; 
   
    while (switching) {
        switching = false; 
        rows =  table.getElementsByTagName("tr"); //rows를 유사배열로만듬
     
        for (i = 1; i < (rows.length - 1); i++) {  
            shouldswitch = false;
             x = rows[i].getElementsByTagName("td")[n];
             y = rows[i + 1].getElementsByTagName("td")[n];

            if (dir  == "asc") {//크기비교 x가 클때 
                if (x.innerHTML.toLowerCase()  > y.innerHTML.toLowerCase()) { //tolowercase : 소문자로변경
                    shouldswitch= true;
                    break; //for종료
                }
            } 
            else if (dir == "desc") {//크기비교 y가 클때
                if (x.innerHTML.toLowerCase()  < y.innerHTML.toLowerCase()) { //tolowercase : 소문자로변경 
                    shouldswitch= true; //shouldswitch = 엘리먼트 순서변경
                    break; //for종료
                }
            }
        }
       if (shouldswitch) {//node순서변경
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);//rows[i+1]이라는 엘리먼트를 rows[i]위에 넣어라
            switching = true; 
            switchcount  ++; 
        } 
        else {
          if (switchcount == 0 && dir=="asc") {
            dir = "desc";
            switching = true;
            }
        }
    }
}

document.forms.date.onclick = function () { 
    var input = this.elements.birthday; 
    // 오늘 
    var today = new Date; 
    // 올해 
    var todayYear = today.getFullYear(); 
    // 생일 
    var birthday = new Date(input.value); 
    // 생일 해 
    var birthdayYear = birthday.getFullYear(); 
    if(birthdayYear < todayYear - 150){ 
           alert('나이가 너무 적습니다.'); 
           input.focus(); 
           return false; 
    } 
    // 생일을 올해 23:59:59.999 로 변경 
    birthday.setFullYear(todayYear); 
    birthday.setHours(23); 
    birthday.setMinutes(59); 
    birthday.setSeconds(59); 
    birthday.setMilliseconds(999); 
    // 나이 
    age = todayYear - birthdayYear - 1; 
    // 생일 지났으면 + 1 
    if (today > birthday) { 
           age++; 
    } 
    // 한국 나이 
    koreanAge = todayYear - birthdayYear + 1; 
    // 결과 출력 

    console.log(age);
    console.log(koreanAge);
    //document.getElementById('age').innerHTML = age; 
    //document.getElementById('korean-age').innerHTML = koreanAge; 
    //return false; 
} 

function logout(){
    firebase.auth().signOut();
    window.location.assign("Index.html");
}