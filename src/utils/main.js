// ============ DADOS DOS PROJETOS ============
// Edite aqui pra adicionar seus projetos reais.
const projects = [
  {
    icon: "🚀",
    title: "HotNovelas",
    description: "Plataforma de microhistórias com IA generativa — recomendações personalizadas e leitura imersiva.",
    tags: ["React", "Node.js", "AI"],
    repo: "https://github.com/",
    demo: ""
  },
  {
    icon: "💼",
    title: "Projeto Esapiens",
    description: "Sistema corporativo com foco em produtividade, integrações e dashboards em tempo real.",
    tags: ["TypeScript", "Next.js", "PostgreSQL"],
    repo: "https://github.com/",
    demo: ""
  },
  {
    icon: "🎨",
    title: "Design System Sexlog",
    description: "Biblioteca de componentes e tokens compartilhada entre web, mobile e Figma.",
    tags: ["Design System", "React", "Figma"],
    repo: "https://github.com/",
    demo: ""
  },
  {
    icon: "🤖",
    title: "Profile IA",
    description: "Assistente inteligente que analisa perfis e sugere insights estratégicos baseados em dados.",
    tags: ["Python", "LLM", "API"],
    repo: "https://github.com/",
    demo: ""
  },
  {
    icon: "📊",
    title: "Analytics Dashboard",
    description: "Painel de métricas com visualizações interativas e relatórios customizáveis.",
    tags: ["React", "D3.js", "Charts"],
    repo: "https://github.com/",
    demo: ""
  },
  {
    icon: "🌐",
    title: "Este portifólio",
    description: "Site pessoal feito do zero com HTML, CSS e JS puro. Leve, rápido e responsivo.",
    tags: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/",
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
        ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">Demo →</a>` : ""}
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
