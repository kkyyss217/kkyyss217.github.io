function Home(){
	location.href="page.html";
}
function Project(){
	var view = document.getElementById("view");
	view.innerHTML = '<a href="../paint/paint.html">Paint App</a></br></br>';
	view.innerHTML += '<a href="../Bouncing Balls/bounce.html">Bouncing Balls</a></br></br>';
	view.innerHTML += '<a href="../Bouncing Ball Game/game.html">Bouncing Ball Game</a></br></br>';
	view.innerHTML += '<a href="../phonebookv2/phonebookv2.html">Phone Book</a></br></br>';
	view.innerHTML += '<a href="../hw-firebase/Index.html">Web App using Firebase</a></br></br>';
}
function Aboutme(){
	var view = document.getElementById("view");
	view.innerText="Suwon University  ( 15054051 )\n\n"+"Major : Information of Security\n\n"+"Myname is Choi Hyunkyu\n\n";
}
function Links(){
	var view = document.getElementById("view");
	view.innerHTML = '<a href="http://github.com">GitHub</a></br></br>';	
}