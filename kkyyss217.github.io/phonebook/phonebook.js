function removeRow(r){
    var i=r.parentNode.parentNode.rowIndex;
    document.getElementById('mytable').deleteRow(i);
}
document.getElementById("btnSave").onclick=function(){
    //alert("ok");
    lastName = document.getElementById("ln").value;
    firstName = document.getElementById("fn").value;
    phoneNumber = document.getElementById("phone").value;

   //alert(lastName +"\n"+ firstName +"\n"+ phoneNumber);
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
   /*
   tr.innerHTML= "<td>" + lastName + "</td>";
   tr.innerHTML+= "<td>" + firstName + "</td>";
   tr.innerHTML= "<td>" + phoneNumber + "</td>";
   */
   table.appendChild(tr);
}