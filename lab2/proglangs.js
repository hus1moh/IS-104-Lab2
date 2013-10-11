// finner frem fra dropdown list og vise verdien til den selekterte
list.onchange = function textoutput() {	
	var outputbox = document.getElementById('outputbox');
outputbox.innerHTML = "Du har valgt:  " + this.value;} 

// popupfunksjon som viser at sidene er under konstruksjon
function konstruksjon ()
	{
	alert("Obs Siden er under konstruksjon")
	}
