// dark mode
function darkmodeon() {
	let element1 = document.body;
	element1.classList.toggle("dark-mode");
	
	let element2 = document.getElementById("newsbar");
	element2.classList.toggle("dark-mode");
	
	let element3 = document.getElementById("articles");
	element3.classList.toggle("dark-mode");
	
	let element4 = document.getElementsByTagName("A");
	var i;
	for (i = 0; i < element4.length; i++) {
		element4[i].classList.toggle("dark-mode");
	}
}

// On page load set the theme.
(function() {
	let onpageLoad = localStorage.getItem("theme") || "";
	
	let element = document.body;
	element.classList.add(onpageLoad);
	
	let element2 = document.getElementById("newsbar");
	element2.classList.add(onpageLoad);
	
	let element3 = document.getElementById("articles");
	element3.classList.add(onpageLoad);
	
	let element4 = document.getElementsByTagName("A");
	var i;
	for (i = 0; i < element4.length; i++) {
		element4[i].classList.add(onpageLoad);
	}
	
	document.getElementById("theme").textContent = "Dark Theme: "+localStorage.getItem("theme") || "";
  })();

function themeToggle() {
  let theme = localStorage.getItem("theme");
  if (theme && theme === "On") {
    localStorage.setItem("theme", "Off");
  }
  else {
    localStorage.setItem("theme", "On");
  }
  darkmodeon();
  document.getElementById("theme").textContent = "Dark Theme: "+localStorage.getItem("theme");
}