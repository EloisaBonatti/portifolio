// ============ DADOS DOS PROJETOS ============
// Cada projeto pode ter uma página de detalhe em /projetos/<slug>.html
const projects = [
  {
    icon: "🎬",
    title: "Espiadinhas",
    subtitle: "Vídeos verticais como gatilho de conversão",
    description: "Feature de vídeos curtos criada para aumentar tempo de tela. Virou o super trunfo do Sexlog. Conduzi um teste A/B com 4 grupos pra descobrir o modelo que maximiza receita.",
    tags: ["Product Discovery", "A/B Test", "Freemium"],
    impact: "↑ 4% em conversão geral no site · ↑ 3% em tempo de tela",
    link: "projetos/espiadinhas.html",
    available: true
  },
  {
    icon: "🧩",
    title: "Reposicionamento de botões na navbar",
    subtitle: "Pequena mudança, grande impacto",
    description: "Como o reposicionamento de uma opção do menu aumentou a quantidade geral de uploads de mídia no Sexlog sem prejudicar a experiência do usuário. Teste A/B com 3 grupos e decisão baseada em dados.",
    tags: ["A/B Test", "UX", "Conversão"],
    impact: "Cliques no botão de publicar 4x maiores · sem perda em outros pontos",
    link: "projetos/reposicionamento-navbar.html",
    available: true
  },
  {
    icon: "💳",
    title: "Cartãodinho",
    subtitle: "Projeto freelance: app de gestão de cartões",
    description: "Freelance para cliente externo. Conduzi do zero: discovery, pesquisa de mercado, proposta de valor, regras de negócio e desenho completo do produto. Gestão multicartão com Modo Evento e roadmap em 3 fases.",
    tags: ["Freelance", "Discovery", "UI Mobile", "Concepção"],
    impact: "Produto end-to-end para cliente externo · Roadmap em 3 entregas",
    link: "projetos/cartaodinho.html",
    available: true
  },
  {
    icon: "📊",
    title: "Pesquisa quantitativa: hábitos de postagem",
    subtitle: "Discovery para destravar postagens múltiplas",
    description: "Notei um baixo uso do recurso de postagens múltiplas no Sexlog. Como parte da estratégia de discovery, idealizei, apliquei e analisei uma pesquisa quantitativa para entender se o problema era de hábito ou de produto, e desenhei as ações para destravar.",
    tags: ["Pesquisa Quanti", "Discovery", "UX Research"],
    impact: "Diagnóstico do gap entre hábito e produto · 3 ações priorizadas",
    link: "projetos/pesquisa-postagens-multiplas.html",
    available: true
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
