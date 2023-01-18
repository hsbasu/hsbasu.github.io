// // Functions for dark-mode
(function thememode() {
	// On page load set the theme reading variables from local storage.
	let theme = localStorage.getItem("theme") || "Off";
	var onpageLoad = ""
	if (theme && theme === "On") {
	  onpageLoad = "dark-mode"
	  localStorage.setItem("theme", "On");
	}
	else {
	  onpageLoad = null
		localStorage.setItem("theme", "Off");
	}
	if (onpageLoad != null) {
    let element1 = document.body;
    element1.classList.add(onpageLoad);
    
    let element2 = document.getElementById("articles");
    element2.classList.add(onpageLoad);
    
    let element3 = document.getElementsByTagName("A");
    var i;
    for (i = 0; i < element3.length; i++) {
      element3[i].classList.add(onpageLoad);
    }
    
    let element4 = document.getElementById("newsbar");
    if (typeof(element4) != 'undefined' && element4 != null) {
      element4.classList.add(onpageLoad);
    }
    
    let element5 = document.getElementById("datetime");
    element5.classList.add(onpageLoad);
  
    let element6 = document.getElementsByClassName("line")
    var i;
    for (i = 0; i < element6.length; i++) {
      element6[i].classList.add(onpageLoad);
    }
  }
	document.getElementById("theme").textContent = "Dark Theme: "+localStorage.getItem("theme") || "Off";
})();

function darkmodeon() {
  // toggling dark mode. if previous state is on,
  // new state will be off and vice-versa
  let element1 = document.body;
  element1.classList.toggle("dark-mode");
  
  let element2 = document.getElementById("articles");
  element2.classList.toggle("dark-mode");
  
  let element3 = document.getElementsByTagName("A");
  var i;
  for (i = 0; i < element3.length; i++) {
    element3[i].classList.toggle("dark-mode");
  }
  
  let element4 = document.getElementById("newsbar");
  if (typeof(element4) != 'undefined' && element4 != null) {
    element4.classList.toggle("dark-mode");
  }
  
	let element5 = document.getElementById("datetime");
	element5.classList.toggle("dark-mode");
  
  let element6 = document.getElementsByClassName("line")
  var i;
  for (i = 0; i < element6.length; i++) {
    element6[i].classList.toggle("dark-mode");
  }
}

function themeToggle() {
// Toggles the theme and saves the theme state to localstorage
let theme = localStorage.getItem("theme");
if (theme && theme === "On") {
  localStorage.setItem("theme", "Off");
  darkmodeon();
}
else {
  localStorage.setItem("theme", "On");
  darkmodeon();
}
document.getElementById("theme").textContent = "Dark Theme: "+localStorage.getItem("theme");
}
// Functions for dark mode ends


// // Function to bring the contents to center
(function nosidebar() {
  // If there are no sidebar, bring the articles float at center
  // and set its width to 90%
  let sidebar = document.getElementById("newsbar");
  if (typeof(sidebar) === 'undefined' || sidebar == null) {
    document.getElementById("articles").style.width = "90%";
    document.getElementById("articles").style.float = "none";
  }
})();
