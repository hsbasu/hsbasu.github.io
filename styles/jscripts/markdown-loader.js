// markdown-loader.js
// Loads external .md files into elements with [include-html]

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[include-html]").forEach(el => {
        const markdownFile = el.getAttribute("include-html");

        const insertMarkdown = (text) => {
            // Render Markdown with syntax highlighting
            const htmlContent = md_html(text);
            el.innerHTML = `<article class="markdown-body">${htmlContent}</article>`;
        };

        if (location.protocol === "file:") {
            // Local file protocol handling
            const xhr = new XMLHttpRequest();
            xhr.open("GET", markdownFile, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 0 || (xhr.status >= 200 && xhr.status < 300)) {
                        insertMarkdown(xhr.responseText);
                    } else {
                        el.innerHTML = markdownFile + " - " + xhr.status + ": " + xhr.statusText;
                    }
                }
            };
            xhr.send(null);
        } else {
            // Standard fetch for http(s)
            fetch(markdownFile)
                .then(response => {
                    if (!response.ok) throw new Error(response.status + ": " + response.statusText);
                    return response.text();
                })
                .then(text => insertMarkdown(text))
                .catch(err => el.innerHTML = markdownFile + " - " + err.message);
        }
    });
});
