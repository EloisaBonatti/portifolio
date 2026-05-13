# Portifólio

Site pessoal de portifólio.

## Stack sugerida

- **React + Vite** — framework e bundler
- **TypeScript** — tipagem
- **Tailwind CSS** — estilização
- **Framer Motion** — animações (opcional)

## Estrutura

```
portifolio/
├── public/              # Assets estáticos servidos diretamente
├── src/
│   ├── assets/          # Imagens, ícones, fontes
│   │   ├── images/
│   │   └── icons/
│   ├── components/      # Componentes reutilizáveis (Header, Footer, Card...)
│   ├── pages/           # Páginas (Home, Sobre, Projetos, Contato)
│   ├── styles/          # CSS global e tokens
│   ├── data/            # Conteúdo estático (lista de projetos, skills, etc.)
│   ├── hooks/           # Custom React hooks
│   └── utils/           # Funções auxiliares
├── docs/                # Documentação e wireframes
└── README.md
```

## Próximos passos

1. Definir conteúdo: bio, projetos, experiências, contato
2. Escolher design/identidade visual
3. `npm create vite@latest . -- --template react-ts`
4. Instalar Tailwind e configurar
5. Implementar páginas
6. Deploy (Vercel / Netlify / GitHub Pages)
