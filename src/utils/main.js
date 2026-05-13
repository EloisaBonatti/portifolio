// ============ DADOS DOS PROJETOS ============
// Cada projeto pode ter uma página de detalhe em /projetos/<slug>.html
const projects = [
  {
    icon: "🎬",
    title: "Espiadinhas",
    subtitle: "Vídeos verticais como gatilho de conversão",
    description: "Feature de vídeos curtos criada para aumentar tempo de tela — virou o super trunfo do Sexlog. Conduzi um teste A/B com 4 grupos pra descobrir o modelo que maximiza receita.",
    tags: ["Product Discovery", "A/B Test", "Freemium"],
    impact: "↑ Tempo de tela · ↑ Conversão · Super trunfo do produto",
    link: "projetos/espiadinhas.html",
    available: true
  },
  {
    icon: "🎨",
    title: "Design System Sexlog",
    subtitle: "Tokens, componentes e governança",
    description: "Construção do design system da rede social — tokens compartilhados entre Figma e código, biblioteca de componentes versionada e processo de contribuição entre design e dev.",
    tags: ["Design System", "Figma", "Governança"],
    impact: "Consistência em 18M+ usuários",
    link: "#",
    available: false
  },
  {
    icon: "🧭",
    title: "Redesign de Onboarding",
    subtitle: "Discovery + redesign do fluxo de novos usuários",
    description: "Pesquisa com usuários, mapeamento de fricções e redesign completo do fluxo de cadastro e primeiros passos no produto.",
    tags: ["UX Research", "Activation", "Discovery"],
    impact: "↑ Ativação na primeira semana",
    link: "#",
    available: false
  }
];

// ============ RENDER PROJETOS ============
const grid = document.getElementById("projectsGrid");
if (grid) {
  grid.innerHTML = projects.map(p => `
    <a href="${p.link}" class="project ${p.available ? 'project--clickable' : 'project--soon'}">
      <div class="project__icon">${p.icon}</div>
      <h3 class="project__title">${p.title}</h3>
      <p class="project__subtitle">${p.subtitle}</p>
      <p class="project__desc">${p.description}</p>
      <div class="project__tags">
        ${p.tags.map(t => `<span class="project__tag">${t}</span>`).join("")}
      </div>
      <div class="project__impact">${p.impact}</div>
      <div class="project__cta">${p.available ? 'Ver case completo →' : 'Em breve'}</div>
    </a>
  `).join("");
}

// ============ THEME TOGGLE ============
const themeBtn = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.documentElement.setAttribute("data-theme", "light");
  if (themeBtn) themeBtn.textContent = "☀️";
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
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
