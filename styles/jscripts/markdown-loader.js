// markdown-loader.js
// Loads external .md files into elements with [include-md]

(function () {
  function runMarkdownLoader() {
    if (typeof md_html !== "function") {
      console.error("md_html is not available.");
      return;
    }

    document.querySelectorAll("[include-md]").forEach(el => {
      const markdownFile = el.getAttribute("include-md");
      console.log("Attempting to load Markdown file:", markdownFile);

      fetch(markdownFile)
        .then(response => {
          if (!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}`);
          }
          return response.text();
        })
        .then(text => {
          const htmlContent = md_html(text);
          el.innerHTML = `<article class="markdown-body">${htmlContent}</article>`;

          if (window.hljs) {
            el.querySelectorAll("pre code").forEach(block => {
              hljs.highlightElement(block);
            });
          }
        })
        .catch(err => {
          console.error("Fetch error:", err);
          el.textContent = `${markdownFile} - ${err.message}`;
        });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runMarkdownLoader);
  } else {
    runMarkdownLoader();
  }
})();
