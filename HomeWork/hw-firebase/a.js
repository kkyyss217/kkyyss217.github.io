a = document.getElementsByTagName('tbody')[0];
var data = [];
 for (x = 0; x < a.childElementCount; x++) {
    var d = new Object();
    d.device = a.getElementsByTagName('tr')[x].getElementsByTagName('td')[1].innerText;
    d.browser = a.getElementsByTagName('tr')[x].getElementsByTagName('td')[2].innerText; 
    d.ip = a.getElementsByTagName('tr')[x].getElementsByTagName('td')[3].innerText; 
    d.date = a.getElementsByTagName('tr')[x].getElementsByTagName('td')[4].innerText;  
    data.push(d); 
} 
return JSON.stringify(data);