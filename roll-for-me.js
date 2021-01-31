function rollForMe() {	
	var genderRoll = Math.floor((Math.random() * 2) + 1);
	var healthRoll = Math.floor((Math.random() *100) + 1);

	var gresults = document.getElementById("gresults");
	var hresults = document.getElementById("hresults");
	
	if (1 % genderRoll === 1) {
		gresults.innerHTML = "<b>Gender roll:</b> " + genderRoll + "<br/> <b>Gender:</b> It's a filly.";
	}
	else {
		gresults.innerHTML = "<b>Gender roll:</b> " + genderRoll + "<br/> <b>Gender:</b> It's a colt.";
	}
	
	if (healthRoll >= 10 && healthRoll <= 19) {
		hresults.innerHTML = "<b>Health roll:</b> " + healthRoll + "<br/> Some form of deafness.";
	}
	else if (healthRoll >= 20 && healthRoll <= 29) {
		hresults.innerHTML = "<b>Health roll:</b> " + healthRoll + "<br/> Some form of muteness.";
	}
	else if (healthRoll >= 30 && healthRoll <= 40) {
		hresults.innerHTML = "<b>Health roll:</b> " + healthRoll + "<br/> Mental or physical inheritable trait.";
	}
	else if (healthRoll >= 50 && healthRoll <= 59) {
		hresults.innerHTML = "<b>Health roll:</b> " + healthRoll + "<br/> Sillborn.";
	}
	else if (healthRoll >= 65 && healthRoll <= 70) {
		hresults.innerHTML = "<b>Health roll:</b> " + healthRoll + "<br/> Brindle/reverse brindle/bird catcher spots/bend spots.";
	}
	else if (healthRoll >= 90 && healthRoll <= 99) {
		hresults.innerHTML = "<b>Health roll:</b> " + healthRoll + "Some form of blindness.";
	}
	else {
		hresults.innerHTML = "<b>Health roll:</b> " + healthRoll + "<br/> Foal is healthy.";
	}
	
}
