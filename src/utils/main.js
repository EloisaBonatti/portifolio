// ============ DADOS DOS PROJETOS ============
// Edite aqui pra adicionar seus projetos reais.
const projects = [
  {
    icon: "🔍",
    title: "Product Discovery — App Mobile",
    description: "Liderei a fase de discovery de um app B2C: entrevistas, jobs to be done, mapa de oportunidades e priorização de hipóteses.",
    tags: ["Discovery", "Research", "JTBD"],
    repo: "",
    demo: ""
  },
  {
    icon: "🎨",
    title: "Design System",
    description: "Construção de design system do zero — tokens, componentes, documentação e governança entre design e dev.",
    tags: ["Design System", "Figma", "UI"],
    repo: "",
    demo: ""
  },
  {
    icon: "📊",
    title: "Redesign de Dashboard",
    description: "Repensei a jornada de um dashboard analítico, reduzindo cliques em 40% e melhorando o NPS em 25 pontos.",
    tags: ["UX", "Dashboard", "B2B"],
    repo: "",
    demo: ""
  },
  {
    icon: "🚀",
    title: "Lançamento de Feature",
    description: "PO end-to-end: do problema à entrega. Definição de escopo, MVP, métricas de sucesso e iteração com base em dados.",
    tags: ["Product Owner", "MVP", "OKRs"],
    repo: "",
    demo: ""
  },
  {
    icon: "🧭",
    title: "Onboarding Repensado",
    description: "Redesign do fluxo de onboarding com testes de usabilidade — aumentou ativação em 35% nas duas primeiras semanas.",
    tags: ["UX Research", "Activation", "Flow"],
    repo: "",
    demo: ""
  },
  {
    icon: "✨",
    title: "Este portifólio",
    description: "Site pessoal feito do zero, com tema rosa, dark/light mode e foco em apresentar trabalho de forma clara e bonita.",
    tags: ["UI", "Web", "Design"],
    repo: "",
    demo: ""
  }
];

// ============ RENDER PROJETOS ============
const grid = document.getElementById("projectsGrid");
if (grid) {
  grid.innerHTML = projects.map(p => `
    <article class="project">
      <div class="project__icon">${p.icon}</div>
      <h3 class="project__title">${p.title}</h3>
      <p class="project__desc">${p.description}</p>
      <div class="project__tags">
        ${p.tags.map(t => `<span class="project__tag">${t}</span>`).join("")}
      </div>
      <div class="project__links">
        ${p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener">Código →</a>` : ""}
        ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">Ver case →</a>` : ""}
      </div>
    </article>
  `).join("");
}

// ============ THEME TOGGLE ============
const themeBtn = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.documentElement.setAttribute("data-theme", "light");
  themeBtn.textContent = "☀️";
}
themeBtn?.addEventListener("click", () => {
  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  if (isLight) {
    document.documentElement.removeAttribute("data-theme");
    themeBtn.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    themeBtn.textContent = "☀️";
    localStorage.setItem("theme", "light");
  }
});

// ============ ANO ATUAL ============
document.getElementById("year").textContent = new Date().getFullYear();
