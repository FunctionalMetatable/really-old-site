link = "functionalmetatable.github.io" + window.location.pathname;
fetch(
  "https://stats.9gr.repl.co/github/website/analytics/addviews/" + btoa(link)
)
  .then((res) => res.json())
  .then((res) => {
    console.log("[analytics]: request fulfilled");
  });
