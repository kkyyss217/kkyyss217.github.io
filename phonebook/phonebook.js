

document.getElementById("btnSave").onclick=function(){
    //alert("ok");
    
    lastName = document.getElementById("ln").value;
    firstName = document.getElementById("fn").value;
    phoneNumber = document.getElementById("phone").value;
    var pb = new Array();
    var p = {};
    p.lastName=lastName;
    p.firstName=firstName;
    p.phoneNumber=phoneNumber;
    pb.push(p);
    console.log(pb);
    updateTable(p);
   //alert(lastName +"\n"+ firstName +"\n"+ phoneNumber);
   /*
   table= document.getElementById("mytable");
   tr=document.createElement("tr");
   td1=document.createElement("td");
   td2=document.createElement("td");
   td3=document.createElement("td");
   td4=document.createElement("tr");
   td1.innerText = lastName;
   td2.innerText = firstName;
   td3.innerText = phoneNumber;
   td4.innerHTML = "<input type='button' name=Delete value='Del' onClick='removeRow(this);'>";
   tr.appendChild(td1);
   tr.appendChild(td2);
   tr.appendChild(td3);
   tr.appendChild(td4);
   table.appendChild(tr);
   */
   /*
   tr.innerHTML= "<td>" + lastName + "</td>";
   tr.innerHTML+= "<td>" + firstName + "</td>";
   tr.innerHTML= "<td>" + phoneNumber + "</td>";
   */
}
function removeRow(r){
    var i=r.parentNode.parentNode.rowIndex;
    document.getElementById('mytable').deleteRow(i);
}


function updateTable(p){
	//update Table Here...
	console.log(p)
	table= document.getElementById("mytable");
  	tr=document.createElement("tr");
  	td1=document.createElement("td");
  	td2=document.createElement("td");
  	td3=document.createElement("td");
  	td4=document.createElement("tr");
  	td1.innerText = p.lastName;
 	td2.innerText = p.firstName;
 	td3.innerText = p.phoneNumber;
  	td4.innerHTML = "<input type='button' name=Delete value='Del' onClick='removeRow(this);'>";
  	tr.appendChild(td1);
  	tr.appendChild(td2);
  	tr.appendChild(td3);
  	tr.appendChild(td4);
	table.appendChild(tr);
}
function tablesort(n){ //성 정렬, 이름 정렬, 번호 정렬 총 3개만들기
    var table,  rows, switching, i, x, y,elementchange, dir, switchcount = 0;

    table  = document.getElementById("mytable");
    switching = true;
   
     dir = "일회용"; 
   
      while (switching) {
      switching = false; 
      rows =  table.getElementsByTagName("tr"); //rows를 유사배열로만듬
     
        for (i = 1; i < (rows.length - 1); i++) {  
          elementchange = false;
          x = rows[i].getElementsByTagName("td")[n];
          y = rows[i + 1].getElementsByTagName("td")[n];

            if (dir  == "일회용") {//크기비교 x가 클때 
              if (x.innerHTML.toLowerCase()  > y.innerHTML.toLowerCase()) { //tolowercase : 소문자로변경
                elementchange= true;
                break; //for종료

                    }
                      } 

                else if (dir == "비교") {//크기비교 y가 클때
                      if (x.innerHTML.toLowerCase()  < y.innerHTML.toLowerCase()) { //tolowercase : 소문자로변경 
                            elementchange= true; //elementchange = 엘리먼트 순서변경
                            break; //for종료
               }
             }
           }   
       if (elementchange) {//node순서변경
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);//rows[i+1]이라는 엘리먼트를 rows[i]위에 넣어라
          switching = true; 
          switchcount  ++; 
          } 
        else {
          if (switchcount == 0) {
                  dir = "비교";
                  switching = true;
          }
       }
     }
}