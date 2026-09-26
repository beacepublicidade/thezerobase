# THE ZERO BASE — Design System v1.0
**Última atualização:** 2026-04-17
**Status home:** ✅ COMPLETA E NO AR — https://thezerobase.vercel.app

---

## 🎨 PALETA DE CORES

```css
/* Backgrounds */
--bg-base:   #000000        /* fundo geral */
--bg-card:   #0a0a0f        /* cards e seções escuras */
--bg-border: #1e2530        /* bordas sutis */

/* Accent */
--accent:        #aa0000    /* vermelho principal */
--accent-bright: #cc0000    /* hover / destaque */
--accent-glow:   rgba(170,0,0,0.35)

/* Texto */
--text-primary:   #ffffff
--text-secondary: #8892a4   /* subtítulos, labels */
--text-muted:     #6b7280   /* parágrafos secundários */

/* Tier Colors */
--tier-bronze: #cd7f32
--tier-prata:  #c0c8d4
--tier-ouro:   #e8b24a
--tier-diamante: #5b8dee
--tier-pro:    #aa0000
```

---

## 🔤 TIPOGRAFIA

| Uso | Fonte | Peso | Estilo |
|---|---|---|---|
| Títulos / H1-H4 | `Exo 2` | 700–900 | uppercase, letter-spacing 0.05–0.1em |
| Labels / badges | `Exo 2` | 600–700 | uppercase |
| Corpo / parágrafos | `Roboto` | 400–500 | normal |
| Eyebrow / seção | `Exo 2` | 600 | uppercase, letter-spacing 0.15em, cor accent |

**Import Google Fonts:**
```html
<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700;800;900&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
```

**Hero H1:** `clamp(3rem, 10vw, 6rem)` — gradient branco→cinza no texto
**Section H2:** `clamp(1.8rem, 4vw, 3rem)`
**Section eyebrow:** `13px uppercase letter-spacing 0.15em` cor `#cc0000`

---

## 🔴 LOGO

### Símbolo SVG oficial TZB
```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1263.01 1443.68" style="width:28px;height:32px;filter:drop-shadow(0 0 8px rgba(170,0,0,0.55));">
  <path fill="#AA0000" d="M552.08 1443.68l0.68 -142.2c-444.31,-80.52 -502.61,-489.38 -255.86,-835.86l-104.47 -76.79c-132.74,119.99 -254.44,414.77 -157.43,664.13 72.31,185.89 277.47,358.22 517.09,390.71zm-216.37 -1174.62l258.13 270.41 119.34 -96.68 -73.49 -85.95c490.45,-3.46 723.2,718.98 68.7,935.03l-3.88 145.57c304.55,-15.06 567.68,-327.76 558.24,-640.93 -11.09,-367.53 -266.2,-573.86 -620.82,-609.61l78.24 -86.32 -117.3 -100.59 -267.16 269.06z"/>
</svg>
```

### Logotipo completo (header)
```
[SVG] + THE (branco) + ZERO (vermelho #aa0000) + BASE (branco)
Fonte: Exo 2, 22px, weight 800, letter-spacing 0.06em, uppercase
```

---

## 🖼️ PADRÕES DE IMAGEM

### Backgrounds de Seção
| Versão | Largura | Qualidade WebP | Tamanho alvo |
|---|---|---|---|
| Desktop | 1920px | 65 | < 300KB |
| Mobile | 768px | 55 | < 50KB |

**Como criar com ffmpeg:**
```bash
# Desktop
ffmpeg -y -i original.jpg -vf "scale=1920:-1" -quality 65 bg-nome.webp
# Mobile
ffmpeg -y -i bg-nome.webp -vf "scale=768:-1" -quality 55 bg-nome-mobile.webp
```

### Team Logos / Ícones
- Formato: PNG (com transparência) ou WebP
- Tamanho máximo: **300×300px**
- Compressão: PIL `compress_level=9`
- Fundo branco no container do slider: `120×120px`, padding 16px, border-radius 16px

### Operadores / PNG Decorativos
- Formato: WebP
- Altura original preservada, width max 1200px
- Qualidade: 65 desktop / 45 mobile
- **Esconder no mobile** via CSS: `display:none !important`

### Lazy Loading
- **Sempre** adicionar `loading="lazy"` em imagens abaixo do fold (tudo exceto hero)
- Hero e header: sem lazy (carrega imediato)

---

## 🧩 COMPONENTES

### Botão Primário
```css
background: #aa0000;
color: #ffffff;
font-family: 'Exo 2'; font-weight: 700; font-size: 14px;
padding: 12px 28px; border-radius: 8px;
letter-spacing: 0.08em; text-transform: uppercase;
transition: all 200ms;
/* hover: background #cc0000, box-shadow 0 4px 20px rgba(170,0,0,0.45) */
```

### Botão Outline
```css
background: transparent;
border: 1px solid rgba(170,0,0,0.5);
color: #ffffff;
/* hover: border-color #aa0000, background rgba(170,0,0,0.08) */
```

### Card de Seção
```css
background: #0a0a0f;
border: 1px solid #1e2530;
border-radius: 12px;
/* hover: border-color rgba(170,0,0,0.35), box-shadow 0 0 20px rgba(170,0,0,0.15) */
```

### Badge / Tier
```css
font-family: 'Exo 2'; font-size: 11px; font-weight: 700;
padding: 3px 10px; border-radius: 4px; letter-spacing: 0.08em; text-transform: uppercase;
/* Cores por tier — ver paleta acima */
```

### Section Header Pattern
```html
<div class="section-header">
  <p style="color:#cc0000;">Subtítulo / eyebrow</p>
  <h2>Título Principal da Seção</h2>
</div>
```

---

## ✨ EFEITOS ESPECIAIS

### Hero Atmosférico
- **Grid tático**: background linear-gradient vermelho 5% opacity, 64×64px
- **Scanline**: linha horizontal 2px animada, 6s loop, `@keyframes scanline`
- **Corner brackets**: `::before`/`::after` ou divs com border-top+left / border-bottom+right
- **Linha vertical esquerda**: `left:48px`, gradient transparente→vermelho→transparente (esconder no mobile)
- **Glow radial**: `radial-gradient(circle, rgba(170,0,0,0.12), transparent 70%)`

### Operador com fade (Como Funciona / Parceiros)
```css
mask-image: linear-gradient(to right, black 0%, black 40%, transparent 72%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%);
mask-composite: intersect;
-webkit-mask-composite: source-in;
```

### Hover em itens de lista
```css
transition: all 0.3s ease;
/* hover: translateX(8px), border-color red, bg red 6% opacity */
```

---

## 📐 LAYOUT E ESTRUTURA DA HOME

### Ordem das seções
```
1.  Header sticky — logo + nav + ENTRAR/CADASTRAR + hamburger mobile
2.  Hero — grid tático + scanline + copy ORG-FIRST + stats inline
3.  Stats Bar — 4 itens (Time Fundador / Legado / O Início / T1 Em Breve)
4.  Features — 4 cards (Scrims / Ranking / Agentes Livres / Campeonatos)
5.  Sobre — texto + 3 about-items com ícone TZB SVG
6.  Como Funciona — 3 step-cards + operador decorativo esquerda
7.  Campeonatos — destaque ZERO CUP + Próximos Scrims + Ranking Top Times
8.  Times Slider — Swiper com logos times (fundo branco, 11 orgs)
9.  CTA — "Quem entra agora escreve a história"
10. Parceiros — logos sponsors + operador decorativo esquerda
11. Footer — 3 colunas + social icons + bottom bar
```

### Breakpoints mobile
| Ponto | Aplica |
|---|---|
| `≤ 991px` | Esconde nav desktop, mostra hamburger |
| `≤ 768px` | Layout mobile completo, imagens mobile, padding reduzido |
| `≤ 480px` | Cards 1 por linha, fontes menores, hero compacto |

---

## 🖼️ BACKGROUNDS USADOS NA HOME

| Seção | Arquivo | Observação |
|---|---|---|
| Hero | `bg-topo.webp` | Via CSS class `.hero-tzb` |
| Sobre | `about/bg-sobre.webp` | Via CSS class `.about-section` |
| Campeonatos | `bg-lava.webp` | Inline style |
| CTA | `bg-cta.webp` | Div com class `cta-bg-img` |
| Footer | `footer/bg_wz_footer.webp` | Inline style (none no mobile) |
| Como Funciona | `bg-como-funciona.webp` | Não está em uso ativo — disponível |
| Operador hero | `operator_hero.png` | Right side hero (hidden mobile) |
| Operador 06 | `operator-06.webp` | Decorativo Como Funciona esquerda |
| Operador 05 | `operator-05.webp` | Decorativo Parceiros esquerda |

**Para novas páginas:** troque apenas o background e mantenha todos os outros padrões.

---

## ⚙️ STACK TÉCNICO

```
Framework:    Next.js 16.2.4
Deploy:       Vercel (vercel --prod --yes)
HTML:         public/index.html (estático via rewrite)
CSS base:     Bootstrap 4 + BiGamer template
Animações:    WOW.js (mobile:false, offset:80, live:false)
Slider:       Swiper.js
Fontes:       Google Fonts (Exo 2 + Roboto)
Ícones:       icofont + SVG inline
```

---

## 🚀 PRÓXIMAS PÁGINAS — ROADMAP

Ver `ROADMAP_PAGINAS.md` na mesma pasta.
