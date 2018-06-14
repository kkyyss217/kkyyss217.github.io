var addressBook = [];
var obj;
window.onload = function(){
	// Buttons
	var quickAddBtn = document.getElementById('QuickAdd');
	var quickAddFormDiv = document.querySelector('.quickaddForm')
	var cancelBtn = document.getElementById('Cancel');
	var AddBtn = document.getElementById('Add');
	// Form Fields
	var fullname = document.getElementById('fullname');
	var phone = document.getElementById('phone');
	var address = document.getElementById('address');
	var city = document.getElementById('city');
	var email = document.getElementById('email');
	// Divs etc.
	var addBookDiv = document.querySelector('.addbook');

	quickAddBtn.addEventListener("click", function(){
		// display the form div
		quickAddFormDiv.style.display = "block";
	});

	cancelBtn.addEventListener("click", function(){
		quickAddFormDiv.style.display = "none";
	});

	AddBtn.addEventListener("click", addToBook);

	addBookDiv.addEventListener("click", removeEntry);

	// Storage Array
	

	//localStorage['addbook'] = '[{"fullname":"Sachin B","email":"sachin@frameboxx.in","phone":"93828292","address":"something","city":"Chandigarh"}]';

	function jsonStructure(fullname,phone,address,city,email){
		this.fullname = fullname;
		this.phone = phone;
		this.address = address;
		this.city = city;
		this.email = email;
	}

	function addToBook(){
		var isNull = fullname.value!='' && phone.value!='' && address.value!='' && city.value!='' && email.value!='';
		if(isNull){
			// format the input into a valid JSON structure
			obj = new jsonStructure(fullname.value,phone.value,address.value,city.value,email.value);
			addressBook.push(obj);
			localStorage['addbook'] = JSON.stringify(addressBook);
			quickAddFormDiv.style.display = "none";
			clearForm();
            showAddressBook();
		}
    }

	function removeEntry(e){
		// Remove an entry from the addressbook
		if(e.target.classList.contains('delbutton')){
			var remID = e.target.getAttribute('data-id');
			addressBook.splice(remID,1);
			localStorage['addbook'] = JSON.stringify(addressBook);
			showAddressBook();
		}
	}

	function clearForm(){
		var formFields = document.querySelectorAll('.formFields');
		for(var i in formFields){
			formFields[i].value = '';
		}
	}

	function showAddressBook(){
		if(localStorage['addbook'] === undefined){
			localStorage['addbook'] = '';
		} else {
			addressBook = JSON.parse(localStorage['addbook']);
			// Loop over the array addressBook and insert into the page
			addBookDiv.innerHTML = '<table id="mytable"><tr><th id="name" onclick="sort()">Name</th><th id="email">Email</th><th id="phone">Phone</th><th id="address">Address</th><th id="city">City</th><th id="delete">Delete</th></tr>';
			for(var n in addressBook){
                var str = '<div class="entry">';
                    str += '<tr>';
					str += '<div class="name">' + addressBook[n].fullname + '</div>';
					str += '<div class="email">' + addressBook[n].email + '</div>';
					str += '<div class="phone">' + addressBook[n].phone + '</div>';
					str += '<div class="address">' + addressBook[n].address + '</div>';
					str += '<div class="city">' + addressBook[n].city + '</div>';
					str += '<div class="del"><a href="#" class="delbutton" data-id="' + n + '">Delete</a></div>';
                    str += '</tr>';
                    str += '</div>';
				addBookDiv.innerHTML += str;
            }
            addBookDiv.innerHTML += '</table>';
		}
	}
	showAddressBook();
}

function search_Btn(){
    var search=null;
    search = document.getElementById("search").value;
    //alert("ok");
    for(var n in addressBook){
        if(addressBook[n].fullname == search)
            //alert("ok");
            alert(search + " 의 검색 결과 입니다. " + "\n" +
            "Name   = " + addressBook[n].fullname + "\n" +
            "Email    = " + addressBook[n].email + "\n" +
            "Phone   = " + addressBook[n].phone + "\n" +
            "Address = " + addressBook[n].address + "\n" +
            "City      = " + addressBook[n].city);
    }
}

function sort(){
    //alert("ok");
    var swap_name;
    var swap_email;
    var swap_phone;
    var swap_address;
    var swap_city;

    for(var n in addressBook){
        if(addressBook[n].fullname > addressBook[n+1]){
            swap_name = addressBook[n].fullname;
            swap_email = addressBook[n].email;
            swap_phone = addressBook[n].phone;
            swap_address = addressBook[n].address;
            swap_city = addressBook[n].city;

            addressBook[n].fullname = addressBook[n+1].fullname;
            addressBook[n].email = addressBook[n+1].email;
            addressBook[n].phone = addressBook[n+1].phone;
            addressBook[n].address = addressBook[n+1].address;
            addressBook[n].city = addressBook[n+1].city;
            
            addressBook[n+1].fullname = swap_name;
            addressBook[n+1].email = swap_email;
            addressBook[n+1].phone = swap_phone;
            addressBook[n+1].address = swap_address;
            addressBook[n+1].city = swap_city;
            showAddressBook();
        }
    }
}

function tablesort(n){ //성 정렬, 이름 정렬, 생일 정렬 총 3개만들기
    var table,  rows, switching, i, x, y,shouldswitch, dir, switchcount = 0;

    table  = document.getElementById("mytable");
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