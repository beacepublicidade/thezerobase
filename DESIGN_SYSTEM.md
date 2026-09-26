# THE ZERO BASE — Design System
_Baseado em: análise visual direta Velvet Project + pesquisa Gamers Club, Challengermode, WZHUB_

---

## ESTILO GERAL
**Dark Militar Premium** — dark profundo com accent âmbar/laranja queimado.
Nem neon fluorescente excessivo, nem corporativo seco. Vocabulário visual COD/Warzone.

---

## PALETA DE CORES

```
--bg-base:        #080a0e   /* fundo principal */
--bg-card:        #0f1218   /* cards, seções */
--bg-elevated:    #161b24   /* modais, sidebars, dropdowns */
--bg-border:      #1e2530   /* bordas sutis */

--accent:         #e8b24a   /* âmbar queimado — cor de marca */
--accent-bright:  #f5c842   /* hover, CTA ativo */
--accent-red:     #ff3b3b   /* ações agressivas, perigo, eliminações */
--accent-glow:    rgba(232,178,74,0.25)  /* box-shadow glow */

--text-primary:   #f0f0f0
--text-secondary: #8892a4
--text-muted:     #4a5568

--success:        #22c55e
--danger:         #ef4444
```

---

## TIPOGRAFIA

| Uso | Fonte | Weight |
|---|---|---|
| Hero / H1 grandes | Barlow Condensed | 700–800 |
| H2, H3 seções | Barlow Semi Condensed | 600 |
| Corpo, parágrafos | Inter | 400–500 |
| Stats, labels, badges | Barlow Condensed | 500, uppercase |
| Monospace / IDs | JetBrains Mono | 400 |

Todas gratuitas no Google Fonts.

---

## REFERÊNCIAS POR PLATAFORMA

### Velvet Project (visto ao vivo)
**O que pegar:**
- Sidebar direita com players online em tempo real → sensação de comunidade viva
- Cards de scrims com arte do jogo como fundo + overlay escuro
- Pódio top 3 no ranking (gold/silver/bronze) — impactante
- Nome do time em tipografia gigante transparente no fundo da página
- Tier badges (Bronze, Elite, Diamante) com cores distintas
- Glow neon no logo do time na página de detalhe
- Tabs no perfil do time (Visão Geral / Atletas / Resultados / Sociais)
- Stats inline no card do time: T-Rating, scrims, kills

**O que NÃO pegar:**
- Foco em jogo único (BF6) — a gente faz multi-game
- Wagers desativado (não implementar)
- SPA pura sem SSR — prejudica SEO

### Gamers Club
**O que pegar:**
- Densidade de informação organizada — muito conteúdo sem virar bagunça
- Sistema de badges/ranks elaborado com progressão visual clara
- Navegação por produto clara no header
- Tom sério e competitivo — não "jovem demais"

### Challengermode
**O que pegar:**
- Princípio: "entre numa competição em menos de 1 minuto"
- Clareza de CTAs — usuário nunca fica perdido
- Fluidez de onboarding — cadastro simples, rápido

### WZHUB
**O que pegar:**
- Cards de dados com timestamp (última atualização)
- Vocabulário visual militar/FPS — remete direto ao COD
- Hierarquia de informação densa mas escaneável
- Tipografia condensed bold para headings

---

## COMPONENTES UI

### Botões
```css
/* Primário */
background: #e8b24a;
color: #080a0e;
font: 600 14px 'Barlow Condensed';
letter-spacing: 0.08em;
text-transform: uppercase;
border-radius: 4px;
padding: 10px 24px;

/* Hover */
background: #f5c842;
box-shadow: 0 0 16px rgba(232,178,74,0.35);

/* Secundário */
background: transparent;
border: 1px solid #1e2530;
color: #f0f0f0;
```

### Cards
```css
background: #0f1218;
border: 1px solid #1e2530;
border-radius: 8px;
/* Hover premium */
border-color: rgba(232,178,74,0.3);
box-shadow: 0 0 12px rgba(232,178,74,0.15);
```

### Cards Glassmorphism (seções premium)
```css
background: rgba(15,18,24,0.7);
backdrop-filter: blur(8px);
border: 1px solid rgba(232,178,74,0.15);
```

### Tier Badges
- Recruta: `#4a5568` cinza
- Bronze: `#cd7f32`
- Prata: `#9ca3af`
- Ouro: `#f5c842`
- Diamante: `#60a5fa` azul
- Elite: `#a78bfa` roxo
- Pro: `#ff3b3b` vermelho

---

## LAYOUT

- **Nav:** fixo, transparente com backdrop-blur. Logo esquerda, links centro, CTA direita
- **Sidebar direita:** players online fixo (igual Velvet) — cria sensação de comunidade
- **Grid de scrims:** 3 colunas desktop, 2 tablet, 1 mobile
- **Ranking:** pódio top 3 + tabela para o restante
- **Mobile first:** responsivo completo

---

## EFEITOS / ANIMAÇÕES

- Hover transitions: 200ms ease
- Glow no hover de cards competitivos: box-shadow com accent
- Nome do time em fundo: opacity 0.05–0.08, font-size 15–20vw
- Ponto pulsante (live indicator): animação CSS pulse 1.5s
- Skeleton loading nos cards antes dos dados chegarem
