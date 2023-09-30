function loadFile(path, type) {
  if (type == "js") {
    var fileref = document.createElement("script");
    fileref.setAttribute("type", "text/javascript");
    fileref.setAttribute("src", path);
  } else if (type == "css") {
    var fileref = document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", path);
  }
  document.getElementsByTagName("head")[0].appendChild(fileref);
}

// Stylesheets
loadFile("https://hsbasu.github.io/styles/css-styles/styles.css", "css");
loadFile("https://hsbasu.github.io/styles/css-styles/dark-styles.css", "css");
loadFile("https://hsbasu.github.io/styles/css-styles/responsive_navbar.css", "css");
loadFile("https://hsbasu.github.io/styles/css-styles/responsive_sections.css", "css");
loadFile("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css", "css");
loadFile("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/styles/atom-one-light.min.css", "css");
// loadFile("https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css", "css");

// Scripts
loadFile("https://code.jquery.com/jquery-1.11.3.min.js", "js");
loadFile("https://cdnjs.cloudflare.com/ajax/libs/marked/1.1.1/marked.min.js", "js");
loadFile("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/highlight.min.js", "js");
// loadFile("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/languages/javascript.min.js", "js");
loadFile("https://hsbasu.github.io/styles/jscripts/header.js", "js");
loadFile("https://hsbasu.github.io/styles/jscripts/footer.js", "js");
loadFile("https://hsbasu.github.io/styles/jscripts/navbar.js", "js");
