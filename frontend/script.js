const projects = [
  { name: "Movie Finder App", link: "#" },
  { name: "Task Tracker", link: "#" }
];

const section = document.getElementById("projects");

projects.forEach(p => {
  const div = document.createElement("div");
  div.innerHTML = `<h3>${p.name}</h3><a href="${p.link}">View Project</a>`;
  section.appendChild(div);
});