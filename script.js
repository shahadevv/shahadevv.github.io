const { projects, currentSkills, learningSkills, now } = portfolioContent;

document.querySelector("#projects").innerHTML = projects.length ? projects.map((project) => `
  <article class="project-card ${project.color}">
    <div class="project-art">
      <span class="project-mark">${project.mark}</span>
      <span class="project-label">${project.label}</span>
      <span class="project-number">${project.number}</span>
    </div>
    <div class="project-meta">
      <div><h3>${project.title}</h3><p>${project.type}</p></div>
      <span class="project-arrow">↗</span>
    </div>
  </article>`).join("") : `<p class="empty-projects">I’m working on upcoming projects. Check back soon. <span>✦</span></p>`;

function addSkills(selector, skills) {
  document.querySelector(selector).innerHTML = skills.map((skill, index) =>
    `<span class="skill"><b>${String(index + 1).padStart(2, "0")}</b>${skill}</span>`
  ).join("");
}

addSkills("#current-skills", currentSkills);
addSkills("#learning-skills", learningSkills);
document.querySelector("#project-count").textContent = `(${String(projects.length).padStart(2, "0")})`;
document.querySelector("#now-title").textContent = now.title;
document.querySelector("#now-project").textContent = now.project;
document.querySelector("#now-description").textContent = now.description;
document.querySelector("#year").textContent = new Date().getFullYear();
