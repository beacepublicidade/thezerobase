---
name: The Zero Base — Estrutura Completa do Site (Final)
description: Blueprints da arquitetura total — home, páginas, componentes, justificativas. Pronto para implementação Phase 1-5
date: 2026-04-16
status: Estrutura Final Aprovada — Pronto Build
---

# 🏗️ THE ZERO BASE — ESTRUTURA COMPLETA DO SITE

**Baseado em:** Competidor analysis + Design strategy + Commercial model + Architecture home + Implementation phases

---

## 📊 RESUMO EXECUTIVO

**The Zero Base é uma plataforma única no Brasil porque:**

```
DIFERENCIAIS ESTRUTURAIS:
├─ ORG-FIRST model (times como entidade central)
├─ 3 categorias simultâneas (Pro/Amador/Academy)
├─ 52 semanas de torneios (estável, não sazonal)
├─ Anti-cheat real-time (Zero Eye OCR integrado)
├─ Stats inteligentes (único mercado BR)
├─ Leaderboard persistente (carreira unificada)
├─ Design premium (dark + ouro + vermelho)
└─ Monetização sustentável (50% prêmios + 20% margin + 30% overhead)
```

---

## 🎯 ARQUITETURA DO SITE (IA VISUAL)

```
THE ZERO BASE (thezerobase.com)
│
├─ PÚBLICAS (sem login)
│  ├─ / (HOME) ........................... 13 seções estratégicas
│  ├─ /scrims ........................... Browse scrims abertos
│  ├─ /ranking .......................... Leaderboard nacional
│  ├─ /campeonatos ...................... Histórico torneios
│  ├─ /agentes-livres ................... Marketplace jogadores
│  ├─ /perfil/[username] ................ Perfil público
│  ├─ /academy .......................... Sistema Academy (Sub-14/17/20)
│  ├─ /sobre ............................ Missão + valores
│  ├─ /regras ........................... Regulamento oficial
│  └─ /ajuda ............................ FAQ
│
├─ AUTH (Transição)
│  └─ /auth ............................ Google, Discord, Twitch login
│
├─ AUTENTICADAS (pós-login)
│  ├─ /dashboard ........................ Painel jogador
│  ├─ /dashboard/time ................... Gerenciar time
│  ├─ /dashboard/inscricoes ............ Torneios inscritos
│  ├─ /overlay ......................... Gerador overlay (Beacecaster)
│  └─ /admin (só admin) ................ Painel administrativo
│     ├─ /admin/torneios
│     ├─ /admin/resultados
│     ├─ /admin/users
│     ├─ /admin/cms (editar home)
│     └─ /admin/patrocinios
│
└─ APIs (Backend)
   ├─ /api/torneios .................... CRUD tournaments
   ├─ /api/ranking ..................... Leaderboard data
   ├─ /api/stats ....................... Zero Eye OCR integration
   ├─ /api/beacecaster ................. Broadcaster webhook
   └─ /api/auth ........................ Auth provider
```

---

# 🏠 HOME PAGE (/) — ESTRUTURA DETALHADA

**Por que a HOME é crítica:**
- ✅ Novo visitante têm 5 segundos (bounces fácil)
- ✅ Precisa comunicar valor instantly
- ✅ Gamers são visuais (design matters)
- ✅ CTAs convertem inscrição (monetização começa aqui)

---

## SEÇÃO 1️⃣: HEADER STICKY (Sempre visível)

```
┌───────────────────────────────────────────────────────┐
│ [LOGO THE ZERO BASE] │ Nav │ [ENTRAR / CADASTRAR]    │
│                      │     │ ou                       │
│                      │     │ [MEU DASHBOARD] (login)  │
└───────────────────────────────────────────────────────┘

ESTRUTURA:
├─ Logo (left): 32x32px, clickable → /
├─ Navigation (center):
│  ├─ Home
│  ├─ Explorar (dropdown)
│  │  ├─ Scrims
│  │  ├─ Ranking
│  │  ├─ Torneios
│  │  └─ Agentes Livres
│  ├─ Academy
│  └─ Sobre
└─ Auth (right):
   ├─ [ENTRAR] → /auth (primary red button)
   └─ [CADASTRAR] → /auth (secondary gold button)

DESIGN:
├─ Background: #1a1a2e (dark)
├─ Height: 72px desktop, 64px mobile
├─ Sticky: position fixed, z-index 1000
├─ Border: subtle 1px bottom (#333)
├─ Logo color: white
├─ Nav text: #ffffff
└─ Buttons: design system colors

RESPONSIVE:
├─ Desktop (1440px): full nav horizontal
├─ Tablet (768px): nav collapses → hamburger menu
└─ Mobile (375px): hamburger only, full width buttons

WHY THIS:
✓ Sempre disponível (stickiness ajuda CTA secundário)
✓ Navegação organizada (não confunde)
✓ CTAs claras (duas opções: entrar vs cadastrar)
✓ Responsivo intuitivo (hamburger é padrão mobile)
```

---

## SEÇÃO 2️⃣: HERO (Impacto visual)

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  [BG: cinematic blur, gradiente escuro]            │
│                                                     │
│    ┌─────────────────────────────────────────┐    │
│    │                                         │    │
│    │  "Bem-vindo à profissionalização       │    │
│    │   do esports brasileiro.               │    │
│    │                                         │    │
│    │   The Zero Base: Onde campeões nascem" │    │
│    │                                         │    │
│    │  "Torneios competitivos. Carreira      │    │
│    │   estruturada. Prêmios reais.          │    │
│    │   Primeira plataforma 100% brasileira" │    │
│    │                                         │    │
│    │  [QUERO COMPETIR AGORA] [SAIBA MAIS]   │    │
│    │                                         │    │
│    │  ┌────────────────────────────────────┐│    │
│    │  │ 6,000+  │  R$ 2M  │  168  │  3     ││    │
│    │  │ times   │ prêmios │ torneios│ cats  ││    │
│    │  └────────────────────────────────────┘│    │
│    │  [ASSISTA AO ÚLTIMO CAMPEONATO]         │    │
│    │                                         │    │
│    └─────────────────────────────────────────┘    │
│                                                     │
└─────────────────────────────────────────────────────┘

LAYOUT:
├─ Background:
│  ├─ Image: cinematic blur (Warzone scene, não copyrighted)
│  ├─ Overlay: linear-gradient(135deg, rgba(26,26,46,0.8), rgba(45,45,95,0.9))
│  ├─ Animation: subtle zoom/pan parallax (5s)
│  └─ Height: 100vh (full viewport)
│
├─ Content (centered):
│  ├─ H1: "Bem-vindo à profissionalização..."
│  │  ├─ Font: Barlow Condensed Bold, 56px desktop / 32px mobile
│  │  ├─ Color: #ffffff
│  │  ├─ Line-height: 1.1
│  │  └─ Animation: fade-in 400ms ease-out
│  │
│  ├─ Subheadline: "Torneios competitivos..."
│  │  ├─ Font: Inter Medium, 20px desktop / 16px mobile
│  │  ├─ Color: #e8b24a (gold)
│  │  ├─ Margin: 16px top
│  │  └─ Animation: fade-in 500ms ease-out (100ms delay)
│  │
│  ├─ CTAs (lado a lado, desktop; stacked mobile):
│  │  ├─ Primary: "QUERO COMPETIR AGORA" → /auth
│  │  │  ├─ Button size: md (14px v, 32px h)
│  │  │  ├─ Style: primary red gradient
│  │  │  └─ Animation: fade-in 600ms (200ms delay)
│  │  │
│  │  └─ Secondary: "SAIBA MAIS" → #sobre
│  │     ├─ Button size: md
│  │     ├─ Style: secondary gold outline
│  │     └─ Animation: fade-in 600ms (200ms delay)
│  │
│  ├─ Stats Card (animated counter):
│  │  ├─ Layout: 4 colunas (desktop), 2x2 (tablet), 1 col (mobile)
│  │  ├─ Each stat:
│  │  │  ├─ Icon: monospace number (JetBrains Mono 36px)
│  │  │  ├─ Label: Inter medium 14px
│  │  │  ├─ Counter: 0 → final number, 1000ms easing ease-out
│  │  │  └─ Example: "6,000+" players
│  │  │
│  │  └─ Animation: fade-in on scroll (Intersection Observer)
│  │
│  └─ Broadcast Button:
│     ├─ Text: "ASSISTA AO ÚLTIMO CAMPEONATO"
│     ├─ Style: secondary, icon play
│     └─ Link: integração Beacecaster (widget ou embed YouTube)

WHY THIS:
✓ Hero comunica valor instant (não precisa ler muito)
✓ Cinematic feel atrai gamer visualmente
✓ 2 CTAs clara (ação primária vs explorar)
✓ Stats animados = social proof + dopamine (contador)
✓ Broadcast button = conteúdo ao vivo (FOMO)
✓ Responsivo mantém impacto (altura > largura)
```

---

## SEÇÃO 3️⃣: DIFERENCIAIS (4 Cards)

```
┌──────────────────────────────────────────────────┐
│  "Por que The Zero Base é diferente?"           │
│                                                  │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
│ │  ⚡      │ │  🏆      │ │  📈      │ │  💰      │
│ │ ANTI-   │ │PROFISS   │ │CARREIRA │ │LUCRATIVO │
│ │CHEAT    │ │IONAL     │ │ESTRUT   │ │          │
│ │         │ │          │ │         │ │          │
│ │Fair Play│ │Padrão    │ │Do Amador│ │Ganha     │
│ │Garantido│ │Internaç  │ │ao Pro   │ │Quem      │
│ │         │ │          │ │         │ │Merece    │
│ └──────────┘ └──────────┘ └──────────┘ └──────────┘
│
└──────────────────────────────────────────────────┘

ESTRUTURA POR CARD:
├─ 4 Cards em grid (desktop: 4 col, tablet: 2x2, mobile: 1 col)
├─ Cada card:
│  ├─ Icon (48x48px, centered, gold #e8b24a)
│  ├─ Headline (h3, Barlow Bold, 24px)
│  ├─ Body (Inter regular, 14px, 3-4 linhas)
│  ├─ Card style: #272752 background, 12px radius
│  ├─ Padding: 24px
│  └─ Hover: lift (-4px), glow gold border
│
└─ Animation: fade-in on scroll (staggered 100ms between cards)

CARD 1 - ANTI-CHEAT REAL-TIME:
├─ Icon: Escudo com checkmark
├─ Headline: "Fair Play Garantido"
├─ Body: "Zero Eye OCR integrado. Detecta anomalias
│         em tempo real. Ninguém ganha no jogo sujo."
└─ Why: Maior medo da comunidade é cheater ganhar $

CARD 2 - PROFISSIONAL DESDE DIA 1:
├─ Icon: Troféu
├─ Headline: "Padrão Internacional"
├─ Body: "Broadcast profissional. Stats avançadas.
│         Ranking oficial. Você está competindo
│         em série, não em várzea."
└─ Why: Competidores não têm broadcast consistente

CARD 3 - CARREIRA ESTRUTURADA:
├─ Icon: Gráfico ascendente
├─ Headline: "Do Amateur ao Pro"
├─ Body: "Academy → Amador → Profissional.
│         Sistema como futebol. Saiba exatamente
│         em que nível você está."
└─ Why: Zero estrutura Academy no mercado BR

CARD 4 - LUCRATIVO:
├─ Icon: Moeda/Dólar
├─ Headline: "Ganha Quem Merece"
├─ Body: "R$ 1.5-2M em prêmios/ano. Salários
│         profissionais. Zero Base viabiliza
│         viver de esports."
└─ Why: ExitLag provou que jogadores querem prêmios

WHY THIS:
✓ Comunica 4 diferenciadores-chave instantly
✓ Visual clean (ícone + texto, sem overload)
✓ Hover feedback gratifica interação
✓ Mobile first: cards empilham naturalmente
✓ Educativo sem ser text-heavy (4-5 linhas por card)
```

---

## SEÇÃO 4️⃣: CTA "O PADRÃO QUE O BRASIL MERECIA"

```
┌──────────────────────────────────────────────────┐
│                                                  │
│  "Por 5 anos, o esports br era caótico.         │
│   Apostas ilegais. Sem ranking. Sem prof.       │
│                                                  │
│   The Zero Base muda isso. Agora."              │
│                                                  │
│  ANTES            │         AGORA               │
│  ────────────────────────────────────────       │
│  Discord frag     │    Plataforma centralizada │
│  Sem anti-cheat   │    Zero Eye real-time      │
│  Amador/Pro mix   │    3 categorias claras     │
│  Prêmios incertos │    R$ 2M garantidos        │
│                                                  │
│  [VIRE PARTE DO MOVIMENTO] →                   │
│                                                  │
└──────────────────────────────────────────────────┘

LAYOUT:
├─ Background: #1a1a2e + subtle texture/pattern
├─ Section padding: 64px (xl)
├─ H2: "Por 5 anos, o esports br..."
│  ├─ Font: Barlow Bold 44px / 28px mobile
│  ├─ Color: #ffffff
│  └─ Animation: fade-in on scroll
│
├─ Comparação (2 colunas desktop, 1 mobile):
│  ├─ Left (ANTES):
│  │  ├─ Color: #ff6666 (red light, "bad")
│  │  ├─ Text: smaller, desaturated
│  │  └─ Example: "Discord fragmentado"
│  │
│  └─ Right (AGORA):
│     ├─ Color: #e8b24a (gold, "good")
│     ├─ Text: bold, bright
│     └─ Example: "Plataforma centralizada"
│
└─ CTA Button:
   ├─ Text: "VIRE PARTE DO MOVIMENTO"
   ├─ Style: primary red gradient
   ├─ Size: md
   └─ Link: /auth (convert)

WHY THIS:
✓ Psychological: "before/after" converte melhor
✓ Emotional: "5 anos caótico" cria urgência
✓ Clear value: mostra exatamente o que mudou
✓ Call-to-action: botão clear em bottom
✓ Mobile: comparação fica vertical (natural)
```

---

## SEÇÃO 5️⃣: 3 CATEGORIAS (Tabs Interativas)

```
┌──────────────────────────────────────────────────┐
│                                                  │
│  [PROFESSIONAL] [AMADOR] [ACADEMY]              │
│  ═════════════════════════════════════════════ │
│                                                  │
│  📊 Elite do Esports BR                         │
│  ───────────────────────────────────────────   │
│  Contrato profissional. Salários. Transfer.    │
│                                                  │
│  200+ times │ R$ 500k-1M salários/ano           │
│                                                  │
│  [VER TORNEIOS PROFISSIONAIS]                  │
│                                                  │
│  [Preview de broadcast - Beacecaster embed]    │
│                                                  │
└──────────────────────────────────────────────────┘

ESTRUTURA:
├─ Tabs (3):
│  ├─ PROFESSIONAL (default active)
│  ├─ AMADOR
│  └─ ACADEMY
│
├─ Tab styling:
│  ├─ Active: bold, underline #e8b24a, text white
│  ├─ Inactive: normal, text #999999
│  ├─ Hover: text #e8b24a
│  └─ Animation: tab change = content fade 150ms
│
├─ Content area (each tab):
│  ├─ H3: Headline ("Elite do Esports BR", etc)
│  ├─ Description: 2-3 linhas explaining category
│  ├─ Key numbers: 2-3 stats (JetBrains Mono)
│  ├─ CTA button: "VER TORNEIOS PROFISSIONAIS"
│  └─ Preview: Embed/thumbnail (broadcast, ladder, etc)
│
└─ Responsive:
   ├─ Desktop: tabs horizontal, content full-width right
   └─ Mobile: tabs scroll horizontal (snap), content below

PROFESSIONAL TAB:
├─ Headline: "Elite do Esports BR"
├─ Description: "Contrato profissional. Salários. Transfer Market."
├─ Stats: "200+ times" | "R$ 500k-1M salários/ano"
├─ CTA: "VER TORNEIOS PROFISSIONAIS" → /campeonatos?category=pro
└─ Preview: Beacecaster widget (broadcast ao vivo se houver)

AMADOR TAB:
├─ Headline: "Sua Chance de Brilhar"
├─ Description: "Torneios abertos. Ranking unificado. Membership."
├─ Stats: "6,000+ trios" | "R$ 5-15k prêmios por torneio"
├─ CTA: "INSCREVER-SE AGORA" → /auth
└─ Preview: Ladder/ranking cards (últimos resultados)

ACADEMY TAB:
├─ Headline: "Forma Campeões"
├─ Description: "Sub-14, Sub-17, Sub-20. Carreira desde 12 anos."
├─ Stats: "500+ acadêmicos" | "Escalação automática"
├─ CTA: "SAIBA COMO FUNCIONA" → /academy
└─ Preview: Timeline gráfico (12 anos → profissional)

WHY THIS:
✓ Educativo: explica os 3 caminhos (novo usuário confuso)
✓ Interativo: tabs = engagement (user plays with content)
✓ Responsive: stacks naturalmente em mobile
✓ Diferencial: Academy é único no BR (não tem em CS2/LoL)
✓ Preview: social proof visual (mostra que existem times)
```

---

## SEÇÃO 6️⃣: CALENDAR (Próximos Torneios)

```
┌──────────────────────────────────────────────────┐
│  "168 Torneios em 2026 — Um Só Lugar"           │
│                                                  │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
│ │ Resurgen │ │ Battle   │ │ Academy  │ │ Special  │
│ │ Tuesdays │ │ Royale   │ │ Cup      │ │ Event    │
│ │          │ │          │ │          │ │          │
│ │TER 19:00 │ │SAB 10:00 │ │QUI 15:00 │ │DOM 18:00 │
│ │          │ │          │ │          │ │          │
│ │150 trios │ │ 200 trios│ │ 80 times │ │ 50 trios │
│ │R$ 10.5k  │ │R$ 12k    │ │R$ 8k     │ │R$ 20k    │
│ │          │ │          │ │          │ │          │
│ │[INSCREVA]│ │[INSCREVA]│ │[INSCREVA]│ │[INSCREVA]│
│ └──────────┘ └──────────┘ └──────────┘ └──────────┘
│                                                  │
│  🔽 Filtros: [Resurgência/BR] [Pro/Amador/Acad]│
│  📅 Próximas 7 dias   ▼ Ordenar por: Prêmios ▼  │
│                                                  │
│              [VER CALENDÁRIO COMPLETO 2026]     │
│                                                  │
└──────────────────────────────────────────────────┘

LAYOUT:
├─ H2: "168 Torneios em 2026 — Um Só Lugar"
├─ Grid: 4 cards (desktop), 2x2 (tablet), 1 (mobile)
│
├─ Desktop scrollable grid (horizontal scroll em mobile):
│  ├─ Próximos 4 torneios visíveis por default
│  └─ Scroll reveals mais (carousel pattern)
│
├─ Card de torneio:
│  ├─ Badge (top): "RESURGÊNCIA" (gold), "LIVE" (pulsing red)
│  ├─ Horário: "TER 19:00" (small, gray)
│  ├─ Title: "Torneio X" (h3, bold)
│  ├─ Participation: "150 trios" (gray)
│  ├─ Prize: "R$ 10.5k" (gold, bold)
│  ├─ CTA: "[INSCREVA-SE]" (secondary button)
│  └─ Hover: lift, glow
│
├─ Filtros (sticky, desktop only):
│  ├─ Type filter: Resurgência / Battle Royale
│  ├─ Category: Professional / Amateur / Academy
│  ├─ Time range: Próximas 7 dias / próximo mês / custom
│  └─ Sort: Prêmios / Dificuldade / Horário
│
└─ CTA Footer: "[VER CALENDÁRIO COMPLETO 2026]" → /campeonatos

RESPONSIVE:
├─ Desktop: grid 4 col, horizontal carousel
├─ Tablet: grid 2 col, carousel
└─ Mobile: 1 col vertical stack ou carousel horizontal (thumb-friendly)

WHY THIS:
✓ "168 torneios" = social proof (quantity)
✓ Cards visuais = fácil scanning
✓ Filtros = poder pro usuário explorar
✓ "LIVE" badge pulsando = urgência (FOMO)
✓ Carousel em mobile = padrão familiar
✓ CTA claro = inscrição direta (monetização)
```

---

## SEÇÃO 7️⃣: RANKING PREVIEW (Top 10)

```
┌──────────────────────────────────────────────────┐
│  "Quem Manda no Brasil?"                         │
│                                                  │
│  [TOP TIMES] [TOP JOGADORES] [TRENDING]         │
│  ════════════════════════════════════════════   │
│                                                  │
│ # │ Time Name       │ Pts   │ [VER PERFIL]      │
│ ─────────────────────────────────────────────   │
│ 1 │ Team Alpha      │ 1500  │ >                 │
│ 2 │ Team Beta       │ 1350  │ >                 │
│ 3 │ Team Gamma      │ 1200  │ >                 │
│ .. (7 mais)                                     │
│                                                  │
│              [VER RANKING COMPLETO]             │
│                                                  │
└──────────────────────────────────────────────────┘

ESTRUTURA:
├─ H2: "Quem Manda no Brasil?"
├─ 3 Tabs:
│  ├─ TOP TIMES (default)
│  ├─ TOP JOGADORES
│  └─ TRENDING (em alta semana)
│
├─ Content:
│  ├─ Tabela com:
│  │  ├─ Coluna #: rank (1, 2, 3...)
│  │  ├─ Coluna Logo: team avatar (24x24px, round)
│  │  ├─ Coluna Name: team name (bold, white)
│  │  ├─ Coluna Points: JetBrains Mono (gold)
│  │  └─ Coluna Action: "[VER]" button (secondary, small)
│  │
│  └─ Design:
│     ├─ Font: JetBrains Mono (stats/ranking is monospace)
│     ├─ Rows: alternate #272752/#1a1a2e for zebra effect
│     ├─ Hover: background highlight + lift
│     └─ Top 3: badges (🥇🥈🥉) ou gold shine
│
├─ Responsive:
│  ├─ Desktop: full table, 10 linhas
│  └─ Mobile: card layout (1 team per card, avatar + name + pts + btn)
│
└─ CTA: "[VER RANKING COMPLETO]" → /ranking

WHY THIS:
✓ Monospace font (JetBrains) = familiar esports aesthetic
✓ Ranking = social proof (top teams gamify participation)
✓ Top 3 badges = visual reward (motivates climb)
✓ Clicável = lead generation (click → /perfil → login)
✓ Mobile card layout = natural responsive
✓ "TRENDING" tab = fresh content (weekly updates)
```

---

## SEÇÃO 8️⃣: BROADCASTS (Beacecaster Widget)

```
┌──────────────────────────────────────────────────┐
│  "Acompanhe em Tempo Real"                       │
│                                                  │
│  ┌───────────────────────────────────────────┐  │
│  │  [LIVE - Torneio X - Drop 3]              │  │
│  │                                           │  │
│  │  [Beacecaster embed / Twitch player]     │  │
│  │  (1920x1080 responsivo)                 │  │
│  │                                           │  │
│  │  Viewers: 2.3K  │  Duration: 15:42        │  │
│  │                                           │  │
│  └───────────────────────────────────────────┘  │
│                                                  │
│  [ASSISTIR AGORA (TWITCH)] [ÚLTIMOS HIGHLIGHTS]│
│  [CALENDÁRIO DE BROADCASTS]                     │
│                                                  │
└──────────────────────────────────────────────────┘

LAYOUT:
├─ H2: "Acompanhe em Tempo Real"
│
├─ Player (embed):
│  ├─ If torneio LIVE:
│  │  ├─ Beacecaster widget (1920x1080)
│  │  ├─ Badge "LIVE" pulsando (red)
│  │  ├─ Metadata: "Torneio X - Drop 3"
│  │  └─ Stats: Viewers count, timer
│  │
│  └─ If não LIVE:
│     ├─ Grid de clips pré-gravados
│     ├─ 3 clips recentes (16:9 aspect)
│     ├─ Duração visível
│     └─ Play button overlay (gray)
│
├─ CTAs:
│  ├─ "[ASSISTIR AGORA]" → Twitch stream
│  ├─ "[ÚLTIMOS HIGHLIGHTS]" → YouTube playlist
│  └─ "[CALENDÁRIO DE BROADCASTS]" → /campeonatos
│
└─ Responsive:
   ├─ Desktop: 1920x1080 player, full width
   ├─ Tablet: 960x540 (50% smaller)
   └─ Mobile: 100% width, aspect ratio locked (16:9)

WHY THIS:
✓ Live content = highest engagement (FOMO)
✓ Beacecaster proof-of-concept = diferencial técnico
✓ Fallback clips = content sempre disponível
✓ Responsive embed = plays anywhere
✓ CTAs claros = convertem pra Twitch/YouTube (grow channels)
✓ Metadata = educativo (mostra competição existe)
```

---

## SEÇÃO 9️⃣: SOCIAL PROOF (6,000+ times, Testimonials)

```
┌──────────────────────────────────────────────────┐
│  "Já são 6,000+ times confiando em The Zero Base"│
│                                                  │
│  ✅ 6,000+ trios únicos                          │
│  ✅ 450K+ inscrições                             │
│  ✅ 500K-1M viewers/mês                          │
│  ✅ R$ 1.5-2M prêmios distribuídos               │
│                                                  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│  │ Avatar   │ │ Avatar   │ │ Avatar   │        │
│  │ "Finalm- │ │ "Organi- │ │ "Trans-  │        │
│  │ ente um  │ │ zação    │ │ parência │        │
│  │ padrão   │ │ cresceu  │ │ que      │        │
│  │ profiss" │ │ 5x"      │ │ faltava" │        │
│  │          │ │          │ │          │        │
│  │ — Player │ │ — Org Y  │ │ — Time Z │        │
│  └──────────┘ └──────────┘ └──────────┘        │
│                                                  │
│  (carousel mobile: swipe left/right)            │
│                                                  │
└──────────────────────────────────────────────────┘

ESTRUTURA:
├─ H2: "Já são 6,000+ times confiando..."
│
├─ Stats Grid (4 colunas desktop, 2 mobile, 1 very-small):
│  ├─ Stat 1: "6,000+" | "trios únicos"
│  ├─ Stat 2: "450K+" | "inscrições"
│  ├─ Stat 3: "500K-1M" | "viewers/mês"
│  └─ Stat 4: "R$ 1.5-2M" | "prêmios distribuídos"
│
├─ Testimonial Cards (carousel):
│  ├─ Card 1:
│  │  ├─ Avatar: 64x64px, round
│  │  ├─ Quote: "Finalmente um padrão profissional"
│  │  ├─ Attribution: "— Jogador X"
│  │  └─ Style: card hover lift
│  │
│  ├─ Card 2: "Organização cresceu 5x..."
│  │
│  └─ Card 3: "Transparência que faltava..."
│
├─ Carousel:
│  ├─ Desktop: 3 cards visible, auto-scroll 5s or manual
│  ├─ Tablet: 2 cards
│  └─ Mobile: 1 card, swipe to next
│
└─ Animation: fade-in cards, smooth slide transition

WHY THIS:
✓ Stats = quantitative social proof (6,000 times é real)
✓ Testimonials = qualitative proof (emocional)
✓ Carousel = engagement (user interaction)
✓ Avatars humanize (não é corpo vazio)
✓ Mobile swipe = native feel
✓ Shows community confidence (new users convert melhor vendo)
```

---

## SEÇÃO 🔟: ACADEMY (Timeline Carreira)

```
┌──────────────────────────────────────────────────┐
│  "De 12 anos ao Profissional"                    │
│                                                  │
│  12 anos                                         │
│  ├─ Sub-14 Academy                              │
│  │  ├─ ↓ (performance-based)                    │
│  │  ↓                                            │
│  14-17 anos                                      │
│  ├─ Sub-17 Academy                              │
│  │  ├─ ↓ (escalação automática)                 │
│  │  ↓                                            │
│  17-20 anos                                      │
│  ├─ Sub-20 Academy                              │
│  │  ├─ ↓ (ponte profissional)                   │
│  │  ↓                                            │
│  20+ anos                                        │
│  ├─ PROFISSIONAL (ou venda de contrato)         │
│  └─                                              │
│                                                  │
│  "Você entra cedo. Treina estruturado.         │
│   Sobe automaticamente. Aos 18, você é         │
│   venda de mercado OU estrela do time principal"│
│                                                  │
│  [QUER COMEÇAR SEU CAMINHO?] → /academy        │
│                                                  │
└──────────────────────────────────────────────────┘

LAYOUT:
├─ H2: "De 12 anos ao Profissional"
├─ Visual: Timeline infográfico
│  ├─ Vertical design (mobile-first friendly)
│  ├─ Cada stage tem:
│  │  ├─ Age range (bold, gold)
│  │  ├─ Category name ("Sub-14 Academy")
│  │  ├─ Small description
│  │  └─ Arrow (↓) pointing down
│  │
│  └─ Colors:
│     ├─ Stage 1: #ff6666 (red light, "entry")
│     ├─ Stage 2: #ffa500 (orange, "growth")
│     ├─ Stage 3: #e8b24a (gold, "near-pro")
│     └─ Stage 4: #00d969 (green, "success")
│
├─ Copy:
│  ├─ "Você entra cedo. Treina estruturado..."
│  ├─ Font: Inter medium 16px
│  ├─ Color: #ffffff
│  └─ Emphasize: "venda de contrato" (gold)
│
├─ CTA:
│  ├─ Text: "QUER COMEÇAR SEU CAMINHO?"
│  ├─ Style: primary red button
│  └─ Link: /academy
│
└─ Animation:
   ├─ On scroll: each stage animates down
   ├─ Staggered: 100ms between stages
   └─ Effect: fade-in + slide-down

WHY THIS:
✓ Unique: ninguém no BR tem Academy estruturada (CS2/Valorant não fazem)
✓ Visual timeline = fácil entender progression
✓ Color gradient = psychological journey (red→gold→green)
✓ Emotional: "forma campeões" narrative (futebol style)
✓ CTA clear = lead to /academy deep dive
✓ Mobile-friendly: vertical naturally responsive
```

---

## SEÇÃO 1️⃣1️⃣: CTA PRINCIPAL (É Sua Chance)

```
┌──────────────────────────────────────────────────┐
│                                                  │
│  BG: Gradiente bold (#1a1a2e → #2d2d5f)        │
│                                                  │
│  "Profissional que é profissional, joga aqui.  │
│   Que tal ser um deles?"                        │
│                                                  │
│  [QUERO COMPETIR] [SOU ORG, VENHO AQUI]        │
│                                                  │
│  "Zero taxa de inscrição na primeira semana.  │
│   Cadastro em 2 minutos. Primeiros 100         │
│   inscritos ganham badge especial."            │
│                                                  │
└──────────────────────────────────────────────────┘

LAYOUT:
├─ Background: linear-gradient(135deg, #1a1a2e, #2d2d5f)
├─ Padding: xl (48px top/bottom)
├─ Text alignment: center
│
├─ Headline:
│  ├─ H2: "Profissional que é profissional..."
│  ├─ Font: Barlow Bold 44px / 28px mobile
│  ├─ Color: #ffffff
│  └─ Animation: fade-in on scroll
│
├─ CTAs (side by side desktop, stacked mobile):
│  ├─ Primary: "QUERO COMPETIR" → /auth
│  │  ├─ Style: red gradient button
│  │  ├─ Size: lg (larger, catches attention)
│  │  └─ Animation: scale 1.05 on hover
│  │
│  └─ Secondary: "SOU ORG, VENHO AQUI" → /org-signup
│     ├─ Style: gold outline button
│     └─ Size: lg
│
├─ Copy below:
│  ├─ "Zero taxa de inscrição..."
│  ├─ Font: Inter regular 14px
│  ├─ Color: #999999
│  └─ Animation: fade-in delayed
│
└─ Spacing:
   ├─ Headline to CTAs: 24px
   └─ CTAs to copy: 16px

WHY THIS:
✓ Repeating CTA (3rd time on page) = higher conversion
✓ "Profissional" word = aspirational (gamers want prestige)
✓ Two CTAs = two personas (player vs org)
✓ Copy adds urgency ("primeira semana", "primeiros 100")
✓ Badge incentive = gamification (fomo)
✓ Bold gradient = visual anchor (stands out)
```

---

## SEÇÃO 1️⃣2️⃣: FAQ (Accordion)

```
┌──────────────────────────────────────────────────┐
│  "Dúvidas Comuns"                               │
│                                                  │
│  ❓ "Quanto custa participar?"                  │
│  ↳ "R$ 70 por trio. Você ganha R$ 35+..."      │
│    [▼ expandir] ou [collapsed por default]     │
│                                                  │
│  ❓ "Como funciona o anti-cheat?"              │
│  [▼ expandir]                                   │
│                                                  │
│  ❓ "Qual é a diferença Prof/Amador?"          │
│  [▼ expandir]                                   │
│                                                  │
│  ... (6 perguntas total)                        │
│                                                  │
└──────────────────────────────────────────────────┘

ESTRUTURA:
├─ H2: "Dúvidas Comuns"
├─ 6 FAQs em accordion:
│  ├─ Item 1:
│  │  ├─ Question: "Quanto custa participar?"
│  │  ├─ Answer: "R$ 70 por trio. Você ganha R$ 35+ em prêmios + exposure."
│  │  └─ Expanded state: background #272752, padding 16px
│  │
│  ├─ Item 2: "Como funciona o anti-cheat?"
│  │  └─ Answer: "Zero Eye monitora em tempo real..."
│  │
│  ├─ Item 3: "Qual é a diferença Professional/Amador?"
│  │
│  ├─ Item 4: "Quanto tempo leva a carreira Academy?"
│  │
│  ├─ Item 5: "Posso transmitir na Twitch?"
│  │
│  └─ Item 6: "The Zero Base é oficial?"
│     └─ Answer: "Somos plataforma independente de torneios..."
│
├─ Design:
│  ├─ Default: collapsed (1-line visible)
│  ├─ Hover: border gold (#e8b24a)
│  ├─ Expanded: smooth animation (200ms ease-out)
│  ├─ Icon: chevron (↓) rotates 180° when open
│  └─ Mobile: full width, easy tap targets (44px height)
│
└─ Animation: question fade-in staggered

WHY THIS:
✓ FAQ addresses hesitation (cost, cheating, officiality)
✓ Accordion = clean, not overwhelming (hides text)
✓ Expandable = users engage by clicking (interaction)
✓ Answers are honest (builds trust, e.g., "independent")
✓ Mobile-friendly: full width, easy toggle
✓ Educates without scrolling (collapsible saves space)
```

---

## SEÇÃO 1️⃣3️⃣: FOOTER

```
┌──────────────────────────────────────────────────┐
│                                                  │
│ [LOGO]           EXPLORAR         COMUNIDADE    │
│ The Zero Base    ├─ Scrims        ├─ Discord    │
│ Primeira         ├─ Ranking       ├─ Twitch     │
│ plataforma       ├─ Torneios      ├─ YouTube    │
│ profissional     ├─ Agentes       ├─ Instagram  │
│ de esports       ├─ Academy       └─ Blog       │
│                  │                              │
│ [Discord]        LEGAL            │             │
│ [Twitch]         ├─ Terms         │             │
│ [Twitter]        ├─ Privacy       │             │
│ [Instagram]      ├─ Rules         │             │
│ [YouTube]        └─ Contact       │             │
│                                                  │
│ ═════════════════════════════════════════════  │
│ The Zero Base by Big Gamers © 2026.            │
│ Call of Duty: Warzone™ é marca da Activision. │
│ The Zero Base é plataforma independente.       │
│                                                  │
└──────────────────────────────────────────────────┘

LAYOUT:
├─ Background: #0f0f1a (darker than primary)
├─ Padding: lg (32px) top/bottom, 64px sides
├─ Text: #999999 (muted)
│
├─ 4 Colunas (desktop):
│  ├─ Col 1 - Brand:
│  │  ├─ Logo 32x32px
│  │  ├─ "The Zero Base"
│  │  ├─ Description: 2-3 lines
│  │  └─ Social icons (round, 32x32, hover color gold)
│  │
│  ├─ Col 2 - Explorar:
│  │  ├─ H4: "EXPLORAR" (small caps, #e8b24a)
│  │  ├─ Links: Scrims, Ranking, Torneios, etc
│  │  └─ Hover: text white
│  │
│  ├─ Col 3 - Comunidade:
│  │  ├─ H4: "COMUNIDADE"
│  │  └─ Links: Discord, Twitch, YouTube, etc
│  │
│  └─ Col 4 - Legal:
│     ├─ H4: "LEGAL"
│     └─ Links: Terms, Privacy, Rules, Contact
│
├─ Responsivo:
│  ├─ Tablet (768px): 2 cols
│  └─ Mobile (375px): 1 col (vertical stack)
│
├─ Bottom bar:
│  ├─ Border-top: 1px #333
│  ├─ Padding: md (24px) top
│  ├─ Copyright: "The Zero Base by Big Gamers © 2026"
│  ├─ Disclaimer: "Call of Duty: Warzone™ é marca da Activision..."
│  └─ Font size: 12px

WHY THIS:
✓ Dark footer = visual anchor (contrast from body)
✓ 4 columns = organized, easy scan
✓ Social icons clickable = grow followers
✓ Legal disclaimer = protects from Activision takedown
✓ "Independent platform" = clearly states non-official
✓ Mobile stacks = responsive without redesign
```

---

## HOME PAGE — RESUMO FINAL

```
SEQUÊNCIA DE SEÇÕES:
1️⃣  Header (sticky) — navegação sempre disponível
2️⃣  Hero — impacto visual + 2 CTAs principais
3️⃣  Diferenciais — 4 cards (anti-cheat, profissional, carreira, $)
4️⃣  CTA Padrão — antes/depois (emotional hook)
5️⃣  3 Categorias — tabs interativas (edu + engagement)
6️⃣  Calendar — próximos 4 torneios (urgência + conversão)
7️⃣  Ranking — top 10 teams (social proof + lead gen)
8️⃣  Broadcasts — Beacecaster widget (live content)
9️⃣  Social Proof — 6,000+ times + testimonials (credibilidade)
🔟 Academy — timeline carreira (diferencial único)
1️⃣1️⃣ CTA Princip al — 3ª conversão attempt (high intent)
1️⃣2️⃣ FAQ — objection handling
1️⃣3️⃣ Footer — legal + navigation footer

COPY STRATEGY:
├─ Scarcity: "Primeiros 100 inscritos", "168 torneios"
├─ Urgency: "Agora", "Semana 1", "LIVE"
├─ Social proof: "6,000+ times", "R$ 2M prêmios"
├─ Aspiration: "Profissional", "Campeões", "Elite"
└─ Trust: "Anti-cheat", "Fair play", "Transparência"

ENGAGEMENT PATTERN:
Scroll → Read headlines → Hover elements → Click CTA → /auth

CONVERSION FUNNEL:
├─ Top: Hero CTA (broad, "Competir Agora")
├─ Middle: Tabs + Calendar (educate, narrow down)
├─ Bottom: "É Sua Chance" (high intent, final push)
└─ Exit: FAQ (last objections before bounce)
```

---

# 📄 PÁGINAS PÚBLICAS (Sem Login)

## /scrims
```
Listagem de scrims abertos (treinos)
├─ Filtros: formato, horário, nível
├─ Cards: nome, horário, jogadores, CTA join
├─ Responsivo: grid 4 col (desk) → 1 col (mobile)
└─ CTA: [PARTICIPAR] → /auth
```

## /ranking
```
Leaderboard completo (todas as categorias)
├─ Tabs: Top Times | Top Jogadores | Trending
├─ Filtros: Categoria (Pro/Amador/Academy), Período
├─ Tabela: JetBrains Mono, monospace aesthetic
├─ Clicável: rank → /perfil/[username]
└─ Pagination: 50 per page + load more
```

## /campeonatos
```
Histórico de torneios + agenda
├─ Grid com filtros avançados
├─ Cards: type, date, prize, participants, status
├─ Embedded calendar view (month view)
├─ Clicável: card → /campeonatos/[id] (detail page)
└─ CTA: [INSCREVER-SE] → /auth
```

## /agentes-livres
```
Marketplace de jogadores disponíveis
├─ Cards: avatar, name, stats, badges, contact
├─ Filtros: role, rating, category
├─ Clicável: card → /perfil/[username]
└─ CTA: [ENTRAR EM CONTATO] → Discord/form
```

## /perfil/[username]
```
Perfil público de jogador
├─ Header: avatar (128x128), name, level badge
├─ Stats: K/D, wins, tournament count, total prêmios
├─ Graph: performance over time (last 30 days)
├─ Tournament history: table de participações
├─ Social: Discord, Twitch, Twitter links
└─ CTA: [ADICIONAR AO TIME] ou [CONTATO] (org-only)
```

## /academy
```
Sistema de carreira estruturada
├─ Timeline visual (12 → 14 → 17 → 20 → Pro)
├─ Accordion: como funciona, regras, benefícios
├─ Featured: top academy players (social proof)
├─ CTA: [INSCREVER-SE] → /auth
└─ FAQ: "Quanto custa?", "Como escalona?", etc
```

## /sobre
```
Sobre The Zero Base
├─ Missão: "Profissionalizar esports BR"
├─ Valores: Fair play, Transparência, Inovação
├─ Equipe: bios dos fundadores (Big Gamers)
├─ Timeline: história (2026 launch, etc)
└─ Vision: futuro (CS2, BO6, etc)
```

## /regras
```
Regulamento oficial
├─ TOC (table of contents) sidebar (sticky)
├─ Sections: Fair play, Anti-cheat, Scoring, Disputes
├─ Badges: status (e.g., "Updated Apr 16")
└─ Download: PDF exportável
```

## /ajuda
```
FAQ expandido + Suporte
├─ Search bar (filtro)
├─ Categorias: Inscrição, Regras, Técnico, Pagamento
├─ Accordion FAQs
└─ Contact form: email support (integração Supabase)
```

---

# 🔐 PÁGINAS AUTENTICADAS (Pós-Login)

## /auth
```
Login/Signup com 3 provedores
├─ Google OAuth
├─ Discord OAuth
├─ Twitch OAuth
├─ Form fields: email, username, password (optional, se custom auth)
└─ Onboarding: nome → foto → Discord (3 steps)
```

## /dashboard
```
Painel do jogador
├─ Cards: meu time, próximas inscrições, ranking pessoal
├─ Table: últimos resultados (últimas 10 partidas)
├─ Stats: K/D, wins, total earnings (R$)
├─ Sidebar: quick actions
│  ├─ [INSCREVER EM TORNEIO]
│  ├─ [EDITAR PERFIL]
│  └─ [CRIAR/GERENCIAR TIME]
└─ Responsive: cards stack em mobile
```

## /dashboard/time
```
Gerenciar time
├─ Header: team avatar, name, level
├─ Tabs:
│  ├─ Membros: lista + actions (add/remove)
│  ├─ Escalação: formação atual + roster
│  ├─ Histórico: resultados do time
│  └─ Configurações: nome, logo, descrição
├─ CTA: [CONVIDAR MEMBRO] → modal com link/email
└─ Admin only: delete team, change owner
```

## /dashboard/inscricoes
```
Meus torneios inscritos
├─ Tabs: Upcoming | In Progress | Past
├─ Cards: torneio, data, status, resultado, prêmio
├─ Actions: [VER TORNEIO] [SAIR] (se não started)
└─ Sortable: por data, prêmio, status
```

## /overlay
```
Gerador de overlay (para Beacecaster)
├─ Template selector: dropdown (diferentes designs)
├─ Customization:
│  ├─ Team name, logo
│  ├─ Colors (custom theming)
│  ├─ Position (top/bottom/side)
│  └─ Size/transparency
├─ Preview: live render (what OBS sees)
├─ Export: copy OBS browser source URL
└─ Tutorial: video "how to add to OBS"
```

## /admin (Só Admin)

### /admin/torneios
```
CRUD de torneios
├─ List view: table de todos os torneios
│  ├─ Columns: name, type, date, participants, status
│  └─ Actions: [EDIT] [VIEW RESULTS] [DELETE]
├─ Create form: name, type, format, date, max participants, prize pool
├─ Edit form: same fields, + go live button
└─ Filters: status (draft/live/ended), type, date range
```

### /admin/resultados
```
Registrar resultados
├─ Tournament selector: dropdown
├─ Match entry form:
│  ├─ Team 1 name, placement, kills
│  ├─ Team 2 name, placement, kills
│  └─ Scores (auto-calculated per format)
├─ Bulk import: CSV upload
└─ Validation: warns if scores invalid
```

### /admin/users
```
Gerenciar usuários
├─ Search/filter: by name, email, status
├─ Table: name, email, joined, teams, tier
├─ Actions: [VIEW] [EDIT] [DISABLE] [DELETE]
├─ Edit: name, email, verified status, roles
└─ Bulk actions: export, email notification
```

### /admin/cms
```
Editor visual da home + páginas
├─ Page selector: dropdown (home, about, rules, etc)
├─ Sections manager:
│  ├─ Drag-and-drop reorder
│  ├─ Hide/show sections
│  ├─ Edit section content
│  │  ├─ Headline text
│  │  ├─ Body text
│  │  ├─ Images/videos
│  │  └─ CTA button text/link
│  └─ Preview (live update)
├─ Asset manager: upload/delete images
└─ Publish: save changes (webhook → rebuild if needed)
```

### /admin/patrocinios
```
Gerenciar patrocínios
├─ List: sponsor name, tier (OURO/PRATA/MASTER), active, end date
├─ Create: name, tier, contract dates, deliverables checklist
├─ Edit: update status, add media assets
├─ Reporting:
│  ├─ Impressions (logo overlay count)
│  ├─ Mentions (caster count)
│  ├─ Conversions (code usage)
│  └─ Download report (PDF)
└─ Overlays: manage sponsor logos + rotation
```

---

# 🔗 APIs (Backend Endpoints)

## /api/torneios
```
GET /api/torneios
├─ Query params: category, type, status, page, limit
└─ Returns: array of tournaments

POST /api/torneios (admin only)
├─ Body: name, type, format, date, prize_pool
└─ Returns: created tournament

GET /api/torneios/[id]
└─ Returns: tournament detail + matches + leaderboard

PUT /api/torneios/[id] (admin only)
├─ Body: update fields
└─ Returns: updated tournament

DELETE /api/torneios/[id] (admin only)
└─ Returns: 204 No Content
```

## /api/ranking
```
GET /api/ranking
├─ Query: category, period (week/month/alltime), limit
├─ Response: { teams: [...], players: [...], trending: [...] }
└─ Cache: 1 hour (leaderboard updates daily)

GET /api/ranking/[username]
└─ Returns: player stats, matches, teams
```

## /api/stats
```
POST /api/stats (from Zero Eye)
├─ Body: game data from OCR (kills, placement, heatmap, etc)
├─ Auth: Zero Eye API key
└─ Stores in DB, updates leaderboard

GET /api/stats/[match_id]
└─ Returns: detailed stats (K/D, heatmap, positioning, etc)
```

## /api/beacecaster
```
POST /api/beacecaster/webhook
├─ Body: broadcast data (live status, match updates)
├─ Auth: Beacecaster API key
└─ Updates homepage "now live" widget

GET /api/beacecaster/live
└─ Returns: { is_live: boolean, current_tournament, viewer_count }
```

## /api/auth
```
POST /api/auth/login
├─ Body: email, password
└─ Returns: { token, user_data }

POST /api/auth/google
├─ Body: google_token
└─ Returns: { token, user_data, is_new }

POST /api/auth/discord
├─ Body: discord_auth_code
└─ Returns: { token, user_data, is_new }

POST /api/auth/logout
└─ Clears session

GET /api/auth/me
└─ Returns: current user data
```

---

# 🎯 ESTRUTURA RESUMIDA (TL;DR)

```
✅ HOME: 13 seções estratégicas (hero → conversão)
✅ PUBLIC: 8 páginas (explore, ranking, academy, etc)
✅ AUTH: login com OAuth (Google, Discord, Twitch)
✅ DASH: jogador (meu time, inscrições, stats)
✅ ADMIN: 5 modules (torneios, resultados, users, cms, sponsors)
✅ APIS: 5 endpoints (torneios, ranking, stats, broadcast, auth)

DIFERENCIAL DO ZERO BASE:
├─ Unificado: ranking, academy, broadcast em 1 plataforma
├─ Tecnologia: OCR/IA (Zero Eye) integrada para stats
├─ Estrutura: 3 categorias simultâneas (Pro/Amador/Academy)
├─ Premium: dark design com ouro + vermelho
├─ Monetização: 50% prêmios + 20% margin + sponsorships
└─ Único: Academy estruturada (como futebol, não existe no BR)

PRÓXIMO PASSO:
→ Fase 1 Implementation: Home + Header + Auth (2-3 semanas)
```

---

**STATUS:** ✅ ESTRUTURA COMPLETA — PRONTO PARA BUILD

**Autor:** Design + Strategy + Commerce Consolidated
**Data:** 2026-04-16
**Visão:** The Zero Base é a plataforma definitiva de Warzone BR — construída do zero, diferenciada em design + tecnologia + estrutura.

