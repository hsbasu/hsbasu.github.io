/**
 * Dynamically loads JavaScript or CSS files into the document head.
 * @param {string} path - URL of the file to load.
 * @param {string} type - Either "js" for scripts or "css" for stylesheets.
 */
function loadFile(path, type) {
  let fileref;

  if (type === "js") {
    fileref = document.createElement("script");
    fileref.async = false; // Ensure scripts are executed in order
    fileref.setAttribute("type", "text/javascript");
    fileref.setAttribute("src", path);
  } else if (type === "css") {
    fileref = document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", path);
  }

  document.getElementsByTagName("head")[0].appendChild(fileref);
}

// Load core libraries first
loadFile("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js", "js");

// Load Markdown rendering and syntax highlighting libraries
loadFile("https://cdnjs.cloudflare.com/ajax/libs/marked/4.0.1/marked.min.js", "js");
loadFile("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/highlight.min.js", "js");

// Load site-specific scripts
loadFile("https://hsbasu.github.io/styles/jscripts/header.js", "js");
loadFile("https://hsbasu.github.io/styles/jscripts/footer.js", "js");
loadFile("https://hsbasu.github.io/styles/jscripts/navbar.js", "js");
loadFile("https://hsbasu.github.io/styles/jscripts/md_html.min.js", "js"); // Markdown wrapper
loadFile("https://hsbasu.github.io/styles/jscripts/markdown-loader.js", "js"); // Markdown file loader
loadFile("https://hsbasu.github.io/styles/jscripts/slideshow.js", "js");

// Load site and third-party stylesheets
loadFile("https://cdn.jsdelivr.net/gh/SH20RAJ/ShowdownCSS@main/showdown.css", "css");
loadFile("https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css", "css");
loadFile("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css", "css");
loadFile("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css", "css");
loadFile("https://hsbasu.github.io/styles/css-styles/styles.css", "css");
loadFile("https://hsbasu.github.io/styles/css-styles/dark-styles.css", "css");
loadFile("https://hsbasu.github.io/styles/css-styles/responsive_navbar.css", "css");
loadFile("https://hsbasu.github.io/styles/css-styles/responsive_sections.css", "css");
loadFile("https://hsbasu.github.io/styles/css-styles/slideshow.css", "css");
