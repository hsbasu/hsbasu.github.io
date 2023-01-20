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
