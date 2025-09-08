// Function to bring the contents to center
(function nosidebar() {
  // If there are no sidebar, bring the articles float at center
  // and set its width to 90%
  let sidebar = document.getElementById("newsbar");
  if (typeof(sidebar) === 'undefined' || sidebar == null) {
    document.getElementById("articles").style.width = "90%";
    document.getElementById("articles").style.float = "none";
  }
})();
