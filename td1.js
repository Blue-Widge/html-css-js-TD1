/*
	Manipulation d'une adresse IP

*/
function recup()
{
	var adresse1= (document.getElementById("IP1")).value;
	console.log("adresse1");
	var adresse2 = (document.getElementById("IP2")).value;
	document.getElementById("IP1").innerHTML=adresse1;
	document.getElementById("IP2").innerHTML=adresse2;
}

  // crée un nouvel élément div
  // var newDiv = document.createElement("div");
  // et lui donne un peu de contenu
  // var newContent = document.createTextNode("blablabla");
  // ajoute le nœud texte au nouveau div créé
  // newDiv.appendChild(newContent);
  
  // ajoute le nouvel élément créé et son contenu dans le DOM
  // var currentDiv = document.getElementById('div1');
  // document.body.insertBefore(newDiv, currentDiv);

//document.write(orginalIP);
// document.write("<br>");
// document.write(newlIP);
