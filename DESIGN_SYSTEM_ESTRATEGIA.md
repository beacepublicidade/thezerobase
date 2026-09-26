---
name: The Zero Base — Design System & Estratégia Visual (Sênior)
description: Briefing completo de UX/UI para devs e designers — paleta, componentes, efeitos, responsividade, comportamentos
date: 2026-04-16
status: Pronto para implementação Phase 1
author: UX/UI Senior Designer
---

# 🎨 THE ZERO BASE — DESIGN SYSTEM ESTRATÉGICO

**Premissa:** Visual que chama atenção, simples, objetivo, bonito — **gamers dizem "uau"**, mas intuitivo.

---

## 1. FILOSOFIA DE DESIGN

### O Que Somos Visualmente?

**THE ZERO BASE = Premium Esports BR**

Não é:
- ❌ Colorido/chamatício (parece amador)
- ❌ Minimalista demais (fica invisível)
- ❌ Complexo (confunde jogador)

É:
- ✅ **Dark premium** (confiança, profissional)
- ✅ **Acentos dourados/vermelhos** (energia, recompensa)
- ✅ **Ícones minimalistas** (clareza)
- ✅ **Micro-interações** (satisfação ao clicar)
- ✅ **Tipografia bold** (impactante)

### Princípios de Design

```
1. HIERARQUIA CLARA
   → O mais importante é o maior/mais brilhante
   → CTA primary sempre em contraste alto
   → Nada compete com o CTA

2. INTUIÇÃO GAMER
   → Botão = clica aqui
   → Verde/Vermelho = status (win/loss)
   → Ouro = prêmio/reward
   → Hover = feedback imediato

3. MOVIMENTO COM PROPÓSITO
   → Animações 150-300ms (rápido)
   → Não distraem (10% da experiência)
   → Feedback de estado (loading, success, error)

4. RESPONSIVO SEM SACRIFICAR
   → Desktop (1920px): layout full, muitos elementos
   → Tablet (768px): collapse smart, prioridades
   → Mobile (375px): vertical, thumb-friendly (botões grandes)
   → TV (3840px): readable from 10ft away

5. ACESSIBILIDADE SEM PARECER ACESSÍVEL
   → Contraste WCAG AA (não achata cores)
   → Focus states visuais (não invisíveis)
   → Texto legível (16px+ no mobile)
```

---

## 2. PALETA DE CORES (Expandida)

### Cores Primárias

```
PRIMARY: #1a1a2e
├─ Uso: Background principal, cards escuros
├─ Hex: #1a1a2e | RGB: (26, 26, 46) | HSL: (240°, 28%, 14%)
├─ Sensação: Confiança, premium, noturno
└─ Variações:
    ├─ Lighter (#272752) — hover, focus
    ├─ Darker (#0f0f1a) — footer, borders escuros

ACCENT (Gold/Reward): #e8b24a
├─ Uso: Badges, troféus, prêmios, elemento destacado
├─ Hex: #e8b24a | RGB: (232, 178, 74) | HSL: (40°, 77%, 60%)
├─ Sensação: Ganho, recompensa, valor
└─ Variações:
    ├─ Darker (#d4a245) — hover
    ├─ Lighter (#f5c871) — glow effect

CTA (Action Red): #ff3b3b
├─ Uso: Botões principais, urgência, ação
├─ Hex: #ff3b3b | RGB: (255, 59, 59) | HSL: (0°, 100%, 62%)
├─ Sensação: Energia, urgência, decisão
└─ Variações:
    ├─ Darker (#e63030) — hover, pressed
    ├─ Lighter (#ff6666) — disabled, secondary
```

### Cores Suporte

```
NEUTRAL:
├─ Branco: #ffffff (texto principal)
├─ Cinza claro: #f5f5f5 (backgrounds secundários)
├─ Cinza médio: #999999 (texto secundário, labels)
├─ Cinza escuro: #333333 (bordas, separadores)

STATUS:
├─ Success (Win): #00d969 — Verde brilhante
├─ Warning: #ffa500 — Laranja
├─ Error: #ff3b3b — Vermelho (consistente com CTA)
├─ Info: #00b4ff — Azul
└─ Neutral: #666666 — Cinza

GRADIENTES:
├─ Hero Gradient: #1a1a2e → #2d2d5f (azul escuro → roxo)
├─ Card Hover: #272752 → #1a1a2e (subtle lift)
├─ CTA Gradient: #ff3b3b → #e63030 (red vibrante)
└─ Gold Glow: #e8b24a + blur (reward sensation)
```

### Dark Mode (Padrão)

```
✅ JÁ IMPLEMENTAMOS DARK POR DEFAULT

Ajustes se houver light mode futuro:
├─ Primary: #ffffff
├─ Bg: #f5f5f5
├─ Text: #1a1a2e
└─ Accent: #d4a245 (mais escuro para contraste)
```

---

## 3. TIPOGRAFIA

### Escolhas de Fonte

```
HEADLINES (Barlow Condensed)
├─ Font Family: Barlow Condensed Bold
├─ Uso: H1, H2, seções grandes
├─ Peso: 700 (Bold)
├─ Letter-spacing: -0.5px (compacto, impactante)
├─ Line-height: 1.1 (tight, sem desperdício)
├─ Exemplo: "Bem-vindo à profissionalização"

BODY TEXT (Inter)
├─ Font Family: Inter Regular
├─ Uso: Parágrafos, descrições, labels
├─ Peso: 400 (Regular), 600 (Medium para ênfase)
├─ Size: 16px desktop, 14px mobile (mínimo legibilidade)
├─ Line-height: 1.5 (respiração, leitura confortável)

NUMBERS/STATS (JetBrains Mono)
├─ Font Family: JetBrains Mono
├─ Uso: Rankings, scores, timestamps
├─ Peso: 600 (Medium para destaque)
├─ Monospace: Alinha automaticamente (tabelas limpas)
├─ Exemplo: "1º | 1,500 pts"
```

### Escala Tipográfica (Modular 1.25x)

```
H1: 56px (desktop) | 32px (mobile) — Headlines principais
H2: 44px (desktop) | 28px (mobile) — Seções
H3: 36px (desktop) | 24px (mobile) — Subseções
Body: 16px (desktop) | 14px (mobile) — Padrão
Small: 14px (desktop) | 12px (mobile) — Labels, helpers
Tiny: 12px (desktop) | 10px (mobile) — Timestamps, footers

Desktop: 1440px width
Mobile: 375px width
Tablet: 768px width
```

---

## 4. COMPONENTES CORE (Especificações de Dev)

### 4.1 BOTÕES

#### Primary (Principal CTA)

```css
/* Desktop */
.btn-primary {
  background: linear-gradient(135deg, #ff3b3b 0%, #e63030 100%);
  padding: 14px 32px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: all 150ms ease-out;
  box-shadow: 0 4px 12px rgba(255, 59, 59, 0.3);
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #e63030 0%, #d41f1f 100%);
  box-shadow: 0 8px 20px rgba(255, 59, 59, 0.5);
  transform: translateY(-2px); /* subtle lift */
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(255, 59, 59, 0.3);
}

/* Mobile (thumb-friendly) */
@media (max-width: 768px) {
  .btn-primary {
    padding: 16px 24px; /* mais alto pro dedo */
    width: 100%; /* full width */
  }
}
```

**Design Psychology:**
- Vermelho = urgência, decisão
- Gradiente = profissional
- Sombra = elevation (depth)
- Transform no hover = feedback tátil

#### Secondary (Alternativo)

```css
.btn-secondary {
  background: transparent;
  border: 2px solid #e8b24a;
  padding: 12px 28px;
  border-radius: 8px;
  color: #e8b24a;
  font-size: 16px;
  font-weight: 600;
  transition: all 150ms ease-out;
  cursor: pointer;
}

.btn-secondary:hover {
  background: rgba(232, 178, 74, 0.1);
  border-color: #f5c871;
  color: #f5c871;
}
```

**Uso:** "Saiba Mais", "Ver Perfil", navegação secundária

#### Tertiary (Texto, discreto)

```css
.btn-tertiary {
  background: none;
  border: none;
  color: #999999;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
  transition: color 150ms ease-out;
}

.btn-tertiary:hover {
  color: #ffffff;
}
```

**Uso:** Links, rodapé, ações secundárias

#### Disabled State

```css
.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  box-shadow: none;
}

.btn-primary:disabled:hover {
  transform: none;
}
```

---

### 4.2 CARDS (Containers)

#### Card Padrão

```css
.card {
  background: #272752; /* Primary lighter */
  border-radius: 12px;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.05); /* subtle border */
  transition: all 200ms ease-out;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

.card:hover {
  border-color: rgba(232, 178, 74, 0.2);
  box-shadow: 0 8px 24px rgba(232, 178, 74, 0.1);
  transform: translateY(-4px); /* lift on hover */
}

/* Mobile */
@media (max-width: 768px) {
  .card {
    padding: 16px; /* less padding */
    border-radius: 8px;
  }
}
```

**Design Intent:**
- Elevação visual (shadow) = profundidade
- Border sutil = separação sem escurecer
- Hover dourado = interatividade
- Lift = satisfação ao ver resposta

#### Card com Destaque (Ouro)

```css
.card-featured {
  background: linear-gradient(135deg, #272752 0%, #2d2d5f 100%);
  border: 2px solid #e8b24a;
  position: relative;
  overflow: hidden;
}

.card-featured::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, #e8b24a, transparent);
}
```

**Uso:** Featured teams, top players, promoted events

---

### 4.3 INPUTS & FORMS

#### Input Text

```css
.input {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 12px 16px;
  color: #ffffff;
  font-size: 16px;
  font-family: Inter, sans-serif;
  transition: all 150ms ease-out;
}

.input::placeholder {
  color: #666666;
}

.input:focus {
  outline: none;
  border-color: #e8b24a;
  box-shadow: 0 0 0 3px rgba(232, 178, 74, 0.1);
}

.input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

**Mobile:** Min height 44px (touch targets)

#### Select/Dropdown

```css
.select {
  /* igual a input */
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 12px 16px;
  border-radius: 6px;
  color: #ffffff;
  cursor: pointer;
}

.select:focus {
  border-color: #e8b24a;
  box-shadow: 0 0 0 3px rgba(232, 178, 74, 0.1);
}
```

---

### 4.4 TABELAS (Rankings)

```css
.table {
  width: 100%;
  border-collapse: collapse;
  font-family: JetBrains Mono, monospace;
}

.table thead {
  background: rgba(232, 178, 74, 0.05);
  border-bottom: 2px solid #e8b24a;
}

.table th {
  padding: 12px 16px;
  text-align: left;
  color: #e8b24a;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.table td {
  padding: 12px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  color: #ffffff;
}

.table tbody tr:hover {
  background: rgba(232, 178, 74, 0.05);
}

/* Mobile: card layout */
@media (max-width: 768px) {
  .table {
    font-size: 12px;
  }

  .table th {
    display: none;
  }

  .table tr {
    display: block;
    margin-bottom: 12px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    padding: 12px;
  }

  .table td {
    display: block;
    text-align: right;
    padding: 6px 0;
    border: none;
  }

  .table td::before {
    content: attr(data-label);
    float: left;
    color: #999999;
    font-weight: 600;
  }
}
```

---

### 4.5 BADGES & TAGS

#### Badge (Status)

```css
.badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.badge-primary {
  background: #e8b24a;
  color: #1a1a2e;
}

.badge-success {
  background: #00d969;
  color: #1a1a2e;
}

.badge-warning {
  background: #ffa500;
  color: #1a1a2e;
}

.badge-error {
  background: #ff3b3b;
  color: #ffffff;
}
```

**Uso:** "TOP 10", "NEW", "LIVE", status de inscrição

---

## 5. LAYOUT PATTERNS (Grid & Spacing)

### Spacing System (8px base)

```
8px  = xs (labels, small gaps)
16px = sm (padding card)
24px = md (section padding)
32px = lg (header/footer)
48px = xl (section gaps)
64px = 2xl (page margins)

Regra: Tudo múltiplo de 8
```

### Grid System

```
Desktop (1440px):
├─ 12-column grid
├─ Gutter: 24px
├─ Container: 1320px (max)

Tablet (768px):
├─ 8-column grid
├─ Gutter: 16px
├─ Full width com padding

Mobile (375px):
├─ 4-column grid (ou 1 column)
├─ Gutter: 12px
├─ Padding: 16px
```

---

## 6. EFEITOS & ANIMAÇÕES

### Micro-interações (150-300ms)

#### Hover Elevado (Cards, Items)

```css
@keyframes hoverLift {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-4px);
  }
}

.interactive:hover {
  animation: hoverLift 150ms ease-out forwards;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}
```

#### Fade-in (Scroll)

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section {
  animation: fadeIn 400ms ease-out;
}
```

#### Pulse (Live, Notification)

```css
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}

.live-badge {
  animation: pulse 2s infinite;
}
```

#### Loading Spinner

```css
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid rgba(232, 178, 74, 0.2);
  border-top: 3px solid #e8b24a;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

#### Glow Effect (Gold Accent)

```css
@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 10px rgba(232, 178, 74, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(232, 178, 74, 0.8);
  }
}

.featured {
  animation: glow 2s ease-in-out infinite;
}
```

### Velocidade de Animação

```
Fast: 100-150ms — feedback imediato (hover, click)
Normal: 200-300ms — transições suaves
Slow: 400-500ms — scroll reveals, page transitions

Easing: ease-out (entrada), ease-in-out (saída)
```

---

## 7. RESPONSIVIDADE (Mobile-First)

### Breakpoints

```
Mobile:  375px - 599px   (small phones)
Tablet:  600px - 999px   (tablets, large phones)
Desktop: 1000px - 1439px (laptops)
HD:      1440px+         (desktops grandes)
```

### Mobile-First Strategy

```
BASE (mobile, 375px):
└─ Layout vertical
└─ Botões full-width
└─ 1 coluna

@media (min-width: 600px) — Tablet:
└─ 2 colunas onde faz sentido
└─ Grids começam

@media (min-width: 1000px) — Desktop:
└─ 3-4 colunas
└─ Sidebars
└─ Modals em grid
```

### Padrão de Componente Responsivo

```css
/* Mobile (base) */
.component {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  padding: 16px;
}

/* Tablet */
@media (min-width: 600px) {
  .component {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    padding: 24px;
  }
}

/* Desktop */
@media (min-width: 1000px) {
  .component {
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    padding: 32px;
  }
}
```

### Touch Targets (Mobile)

```
Mínimo: 44x44px (Apple guideline)
Ideal: 56x56px

Botões em mobile:
├─ Height: 48-56px
├─ Padding vertical: 16px
└─ Padding horizontal: 24px
```

---

## 8. ACESSIBILIDADE (WCAG AA)

### Contraste

```
✅ APROVADO:
├─ Texto branco (#fff) em primary (#1a1a2e) — 21:1
├─ Ouro (#e8b24a) em primary — 7.5:1
├─ Vermelho (#ff3b3b) em white — 4.3:1

❌ REJEITADO:
├─ Cinza (#999999) em primary — 4.2:1 (baixo)
└─ Usar apenas em texto secundário (labels)
```

### Focus States

```css
.button:focus {
  outline: 2px solid #e8b24a;
  outline-offset: 2px;
}

/* Ou via box-shadow para design */
.button:focus-visible {
  box-shadow: inset 0 0 0 2px #1a1a2e,
              0 0 0 3px #e8b24a;
}
```

### Text Sizing

```
Mínimo: 12px (desktop), 14px (mobile)
Ideal: 16px (body), 14px (mobile body)
Headings: sempre legível mesmo em zoom 200%
```

---

## 9. DARK MODE (Padrão The Zero Base)

```
✅ Implementar dark por padrão
✅ Opcional: suportar light mode futuro

Dark tokens:
├─ Primary bg: #1a1a2e
├─ Secondary bg: #272752
├─ Text: #ffffff
├─ Text secondary: #999999
└─ Accent: #e8b24a
```

---

## 10. COMPONENTES ESPECÍFICOS PARA HOME

### 10.1 HERO SECTION

```
Layout desktop:
┌─────────────────────────────────┐
│ [BG blur cinematic]             │
│ ┌─────────────────────────────┐ │
│ │ HEADLINE (h1, Barlow Bold)  │ │
│ │ Bem-vindo à profissional... │ │
│ │                             │ │
│ │ SUBHEADLINE (p, Inter med)  │ │
│ │ Torneios competitivos...    │ │
│ │                             │ │
│ │ [CTA PRIMARY]  [CTA SEC]    │ │
│ └─────────────────────────────┘ │
│ ┌─────────────────────────────┐ │
│ │ STATS ANIMATED (JetBrains)  │ │
│ │ 6,000+  |  R$ 2M  |  168     │ │
│ │ times   |  prêmios| torneios│ │
│ └─────────────────────────────┘ │
└─────────────────────────────────┘

Mobile:
- Full width
- Padding: 24px
- Headline: 32px
- Stats: vertical, 1 coluna
```

**Animações:**
- Background: subtle zoom/pan (parallax light)
- Stats: counter animation (0 → número, 1s)
- Buttons: fade-in staggered (100ms delay)

### 10.2 DIFFERENTIALS (4 Cards)

```
Desktop (4 colunas):
┌──────┬──────┬──────┬──────┐
│Card1 │Card2 │Card3 │Card4 │
└──────┴──────┴──────┴──────┘

Tablet (2 colunas):
┌──────┬──────┐
│Card1 │Card2 │
├──────┼──────┤
│Card3 │Card4 │
└──────┴──────┘

Mobile (1 coluna):
┌──────┐
│Card1 │
├──────┤
│Card2 │
├──────┤
│Card3 │
├──────┤
│Card4 │
└──────┘

Card content:
├─ Icon (48x48px, centered, gold)
├─ Headline (h3)
├─ Body text (p, 14px)
└─ Hover: lift + glow

Efeito: fade-in on scroll (Intersection Observer)
```

### 10.3 3 CATEGORIAS (TABBED)

```
Desktop:
┌──────────────────────────────┐
│ [PROF] [AMADOR] [ACADEMY]    │
├──────────────────────────────┤
│ Conteúdo da aba selecionada  │
│ ┌────────────────────────┐   │
│ │ Headline + stats       │   │
│ │ Description            │   │
│ │ [CTA]                  │   │
│ └────────────────────────┘   │
└──────────────────────────────┘

Mobile:
- Tabs em scroll horizontal (snap)
- Conteúdo full width
- CTA: 100% width

Animação:
- Tab change: content fade (150ms)
- Aba ativa: border-bottom #e8b24a
```

### 10.4 CALENDAR (Próximos Torneios)

```
Desktop (4 cards em grid):
┌──────┬──────┬──────┬──────┐
│ TOR1 │ TOR2 │ TOR3 │ TOR4 │
└──────┴──────┴──────┴──────┘

Mobile:
┌──────┐
│ TOR1 │ ← scroll horizontal (carousel)
└──────┘

Card de torneio:
┌────────────────┐
│ [TYPE BADGE]   │
│ 🔥 RESURGÊNCIA │
│                │
│ Torneio X      │
│ 150 trios      │
│ R$ 10k prêm    │
│                │
│ [INSCREVA-SE]  │
└────────────────┘

Efeito: Badge animado (glow se live)
```

### 10.5 RANKING (Top 10)

```
Tabela com layout responsivo:
Desktop: JetBrains Mono em tabela normal

Mobile:
# │ Time         │ Pts
─────────────────────────
1 │ Team Alpha   │ 1500
2 │ Team Beta    │ 1350

Conversion:
┌─────────────────────┐
│ 1. Team Alpha       │ ← clicável
│    1,500 pts        │
├─────────────────────┤
│ 2. Team Beta        │
│    1,350 pts        │
└─────────────────────┘

Hover: card abre para mais info (modal ou expand)
```

### 10.6 FOOTER

```
Desktop (4 colunas):
┌──────┬──────┬──────┬──────┐
│Col1  │Col2  │Col3  │Col4  │
└──────┴──────┴──────┴──────┘

Mobile (1 coluna stack):
┌──────┐
│Col1  │
│Col2  │
│Col3  │
│Col4  │
│Legal │
└──────┘

Colors:
- Background: #0f0f1a (mais escuro)
- Text: #999999 (muted)
- Links: #e8b24a (hover white)

Separador: border-top 1px #333
```

---

## 11. FLUXOS DE INTERAÇÃO (UX Flows)

### Novo Usuário (Mobile)

```
1. Acessa home
   ↓ [Scroll automático suave para hero]

2. Vê hero com CTA grande
   ↓ [Botão pulsando suavemente]

3. Clica em [COMPETIR AGORA]
   ↓ [Fade out home, fade in /auth]

4. Preenche form
   ↓ [Input focus: border gold]
   ↓ [Error inline: vermelho com ícone]

5. Clica [CADASTRAR]
   ↓ [Loading spinner giratório]
   ↓ [Success: checkmark + redirect /dashboard]
```

### Retorno Usuário (Desktop)

```
1. Acessa home
   ↓ [Reconhece sessão, header muda]

2. Header aparece [MEU DASHBOARD]
   ↓ [Dropdown ao hover]

3. Opções: "Ver meus torneios", "Inscrever novo"
   ↓ [Click → /dashboard]
```

---

## 12. CHECKLIST DE IMPLEMENTAÇÃO (Dev + Designer)

### Phase 1: Foundation

- [ ] Setup Tailwind CSS com tokens customizados
- [ ] Cores em `:root` (CSS variables)
- [ ] Tipografia importada (Barlow, Inter, JetBrains)
- [ ] Reset CSS completo (normalization)
- [ ] Dark mode setup (Tailwind dark mode)

### Phase 1.5: Core Components

- [ ] Botões (primary, secondary, tertiary, disabled)
- [ ] Cards (padrão, featured, hover states)
- [ ] Inputs (text, select, focus states)
- [ ] Badges (colors: primary, success, warning, error)
- [ ] Tables (desktop + mobile card layout)

### Phase 1.8: Layout

- [ ] Grid system setup (12 col desktop, 8 tab, 4 mobile)
- [ ] Header sticky (responsivo)
- [ ] Footer (4 col → 1 col mobile)
- [ ] Spacing utilities (8px base)

### Phase 2: Animações

- [ ] Hover elevado (all interactive)
- [ ] Fade-in on scroll
- [ ] Loading spinner
- [ ] Tab transitions
- [ ] Counter animations (stats)

### Phase 2.5: Acessibilidade

- [ ] WCAG AA contrast check
- [ ] Focus states visíveis
- [ ] Alt text em imagens
- [ ] Keyboard navigation (tab order)
- [ ] Screen reader testing

---

## 13. GUIA PARA CÓDIGO (Next.js + Tailwind)

### Estrutura Recomendada

```
/components
├── /common
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Button.tsx
├── /home
│   ├── HeroSection.tsx
│   ├── DifferentialsCards.tsx
│   ├── CategoriesTabs.tsx
│   ├── CalendarSection.tsx
│   ├── RankingPreview.tsx
│   └── ...
└── /ui (reutilizáveis)
    ├── Card.tsx
    ├── Badge.tsx
    ├── Table.tsx
    └── ...

/styles
├── globals.css
├── tokens.css (cores, spacing, tipografia)
└── animations.css

/config
└── theme.js (Tailwind config customizado)
```

### Token Colors (Tailwind)

```js
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      primary: {
        900: '#0f0f1a',
        800: '#1a1a2e',
        700: '#272752',
        600: '#2d2d5f',
      },
      accent: {
        gold: '#e8b24a',
        'gold-dark': '#d4a245',
        'gold-light': '#f5c871',
      },
      cta: {
        red: '#ff3b3b',
        'red-dark': '#e63030',
        'red-light': '#ff6666',
      },
      status: {
        success: '#00d969',
        warning: '#ffa500',
        error: '#ff3b3b',
        info: '#00b4ff',
      },
    },
    spacing: {
      xs: '8px',
      sm: '16px',
      md: '24px',
      lg: '32px',
      xl: '48px',
      '2xl': '64px',
    },
  },
}
```

### Button Component (Example)

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-150 ease-out';

  const variants = {
    primary: 'bg-gradient-to-br from-cta-red to-cta-red-dark text-white hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50',
    secondary: 'border-2 border-accent-gold text-accent-gold hover:bg-accent-gold/10 disabled:opacity-50',
    tertiary: 'text-slate-400 hover:text-white underline disabled:opacity-50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

---

## 14. PALETA VISUAL (Referências Visuais)

### Inspiração de Marcas (Competidores Globais)

```
CSGO/CS2 (Valve):
├─ Dark background
├─ Amarelo/laranja acentos
├─ Tipografia bold
└─ Efeito: Premium esports

Valorant (Riot):
├─ Dark primário
├─ Neons (pink, cyan)
├─ Sci-fi feel
└─ Muito movimento

Fortnite (Epic):
├─ Colorido (não match nosso)
├─ Tipografia futurista
└─ Muita animação

The Zero Base (OUR APPROACH):
├─ Dark (CS2 + Valorant)
├─ Gold + Red (próprio, premium)
├─ Tipografia bold (legibilidade)
├─ Movimento com propósito (Valorant-light)
└─ Mais minimalista (foco no conteúdo)
```

---

## 15. QUICK REFERENCE (Cheatsheet Dev)

```
PRIMARY ACTION → CTA Red (#ff3b3b) button
SECONDARY ACTION → Gold (#e8b24a) outline button
INFORMATION → Blue (#00b4ff) text
SUCCESS → Green (#00d969) badge/icon
WARNING → Orange (#ffa500) badge/icon
ERROR → Red (#ff3b3b) text/border

FONT SIZES:
H1 = 56px (desktop) | 32px (mobile)
H2 = 44px (desktop) | 28px (mobile)
Body = 16px | 14px (mobile)

PADDING:
Large section = 32-48px
Card = 24px
Button = 14px v / 32px h

BORDER RADIUS:
Buttons = 8px
Cards = 12px
Inputs = 6px
Badges = 4px

ANIMATION:
Hover = 150ms
Transition = 200-300ms
Scroll reveal = 400ms
Easing = ease-out (default)
```

---

## 📌 CONCLUSÃO

**The Zero Base é:**
- ✅ Dark premium (confiança)
- ✅ Gold + Red acentos (recompensa + ação)
- ✅ Tipografia impactante (Barlow bold headlines)
- ✅ Micro-interações suaves (150-300ms)
- ✅ Responsivo thumb-friendly (mobile first)
- ✅ Acessível (WCAG AA)
- ✅ Gamer mindset (intuitivo, satisfatório)

**Quando implementado:** Gamers dizem "uau" — bonito, simples, objetivo.

---

**STATUS:** ✅ DESIGN STRATEGY COMPLETO — PRONTO PARA IMPLEMENTAÇÃO FASE 1

**Próximo passo:** Abrir Figma e criar mockups das 13 seções da home usando essas specs.

