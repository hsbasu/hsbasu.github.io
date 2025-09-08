function darkmodeon() {
  // Toggle dark mode classes on various elements
  document.body.classList.toggle("dark-mode");

  const articles = document.getElementById("articles");
  if (articles) articles.classList.toggle("dark-mode");

  const links = document.getElementsByTagName("A");
  for (let i = 0; i < links.length; i++) {
    links[i].classList.toggle("dark-mode");
  }

  const newsbar = document.getElementById("newsbar");
  if (newsbar) newsbar.classList.toggle("dark-mode");

  const datetime = document.getElementById("datetime");
  if (datetime) datetime.classList.toggle("dark-mode");

  const lines = document.getElementsByClassName("line");
  for (let i = 0; i < lines.length; i++) {
    lines[i].classList.toggle("dark-mode");
  }

  const markdownBodies = document.getElementsByClassName("markdown-body");
  for (let i = 0; i < markdownBodies.length; i++) {
    markdownBodies[i].classList.toggle("dark-mode");
  }

  const themeIcon = document.getElementById("theme");
  if (themeIcon) themeIcon.classList.toggle("dark-mode");
}

function updateHighlightTheme(isDark) {
  let link = document.getElementById("hljs-theme");

  if (!link) {
    link = document.createElement("link");
    link.rel = "stylesheet";
    link.id = "hljs-theme";
    document.head.appendChild(link);
  }

  link.href = isDark
    ? "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css"
    : "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css";
}

function themeToggle() {
  let theme = localStorage.getItem("theme");
  let darkicon = "";
  let isDark;

  if (theme && theme === "On") {
    darkicon = '<i class="fa-solid fa-moon" aria-hidden="true"></i>';
    localStorage.setItem("theme", "Off");
    darkmodeon();
    isDark = false;
  } else {
    darkicon = '<i class="fa-solid fa-sun" aria-hidden="true"></i>';
    localStorage.setItem("theme", "On");
    darkmodeon();
    isDark = true;
  }

  const themeElement = document.getElementById("theme");
  if (themeElement) {
    themeElement.innerHTML = darkicon;
  }

  updateHighlightTheme(isDark);
}

document.addEventListener("DOMContentLoaded", () => {
  let theme = localStorage.getItem("theme");
  const isDark = theme === "On";

  if (isDark) {
    darkmodeon();
    const themeElement = document.getElementById("theme");
    if (themeElement) {
      themeElement.innerHTML =
        '<i class="fa-solid fa-sun" aria-hidden="true"></i>';
    }
  } else {
    const themeElement = document.getElementById("theme");
    if (themeElement) {
      themeElement.innerHTML =
        '<i class="fa-solid fa-moon" aria-hidden="true"></i>';
    }
  }

  updateHighlightTheme(isDark);
});
