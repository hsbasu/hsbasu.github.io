// markdown-loader.js
// Loads external .md files into elements with [include-md]

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[include-md]").forEach(el => {
        const markdownFile = el.getAttribute("include-md");
        console.log("Attempting to load Markdown file:", markdownFile);  // Debug log

        const insertMarkdown = (text) => {
            // Render Markdown with syntax highlighting
            const htmlContent = md_html(text);
            el.innerHTML = `<article class="markdown-body">${htmlContent}</article>`;
        };

        if (location.protocol === "file:") {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", markdownFile, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 0 || (xhr.status >= 200 && xhr.status < 300)) {
                        insertMarkdown(xhr.responseText);
                    } else {
                        console.error(`XHR error: ${xhr.status} - ${xhr.statusText}`);
                        el.innerHTML = markdownFile + " - " + xhr.status + ": " + xhr.statusText;
                    }
                }
            };
            xhr.send(null);
        } else {
            fetch(markdownFile)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.status + ": " + response.statusText);
                    }
                    return response.text();
                })
                .then(text => insertMarkdown(text))
                .catch(err => {
                    console.error("Fetch error:", err);
                    el.innerHTML = markdownFile + " - " + err.message;
                });
        }
    });
});
