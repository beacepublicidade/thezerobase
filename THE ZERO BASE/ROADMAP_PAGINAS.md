# THE ZERO BASE — Roadmap de Páginas
**Atualizado:** 2026-04-17
**Meta:** Site divulgável até segunda-feira (2026-04-21)

---

## 🎯 LÓGICA DE PRIORIDADE

Para divulgar na segunda, o visitante precisa:
1. Chegar na home e entender o produto ✅ (feito)
2. Clicar em "Entrar na Base" e não cair numa tela quebrada
3. Ver que existem scrims, ranking, campeonatos — mesmo que em "Em breve"
4. Sentir que a plataforma é real e profissional

**Estratégia:** páginas estáticas de "aguarde / em breve" com o mesmo design system
→ Dão a impressão de produto completo sem precisar de backend

---

## FASE 2 — LANÇAMENTO (até segunda 21/04)

### 🔴 PRIORIDADE 1 — Indispensáveis

#### `/auth` — Login / Cadastro
- Página simples: "Entrar com Google" + "Entrar com Discord"
- Layout: fundo hero-tzb, card central glass, logo TZB
- CTA: "Cadastro gratuito em menos de 2 minutos"
- **Por que urgente:** todos os botões "Entrar na Base" apontam pra cá

#### `/scrims` — Scrims
- Lista com os 3 tiers (Bronze / Prata / Ouro) como cards
- Status: "Temporada 1 — Em breve" com countdown ou "Inscreva-se para ser notificado"
- Mostra as regras de KD Gate (1.0-2.0 / 2.0-3.5 / 3.5-5.5)
- **Por que urgente:** é o produto principal, está no nav

#### `/ranking` — Ranking Nacional
- Tabela placeholder com top 10 genérico (nomes fictícios ou times já cadastrados)
- Badge de tier, ZERO Points, posição
- "Temporada 1 — Ranking abre com o primeiro campeonato"
- **Por que urgente:** está no nav, é diferencial do produto

---

### 🟡 PRIORIDADE 2 — Importantes (pode ser semana seguinte)

#### `/campeonatos` — Campeonatos
- ZERO CUP T1 em destaque (mesmo card da home)
- Status "Inscrições abrindo em breve"
- Formulário de interesse: email + nick
- **Por que:** fechamento do funil — usuário quer competir

#### `/agentes-livres` — Agentes Livres / Squad Finder
- Lista de jogadores disponíveis (placeholder)
- Filtros: tier KD, região, estilo
- CTA: "Cadastre-se para aparecer aqui"

#### `/regras` — Regulamento
- Texto das regras, KD Gate explicado, ZERO Points fórmula
- Estático, sem backend
- **Por que:** credibilidade, fair play

---

### 🟢 PRIORIDADE 3 — Fase 3 (backend necessário)

#### `/dashboard` — Painel do Jogador
- Requer auth (Supabase ou NextAuth)
- Perfil: nick, KD, tier, histórico
- Meu time: criar/entrar em time

#### `/dashboard/time` — Gestão do Time
- Roster, tier, inscrições ativas

#### `/perfil/[username]` — Perfil Público
- Card de atleta: stats, histórico, tier

#### `/admin` — Painel Administrativo
- CRUD de scrims, campeonatos, orgs
- Aprovação manual de times fundadores

---

## 📋 ESTRUTURA DE CADA PÁGINA NOVA

Toda página nova deve seguir:

```
1. Header (mesmo da home — sticky, hamburger mobile)
2. Page Hero — fundo diferente (trocar background), título da página
3. Conteúdo específico
4. CTA — "Cadastre-se" ou "Entrar na Base"
5. Footer (mesmo da home)
```

**Reusar da home:**
- `.hero-tzb` CSS (só trocar background-image)
- Header e Footer exatos
- Design tokens / paleta
- Botões btn-primary-hero / btn-outline-hero
- Badge-tier
- Cards com border glow

---

## 🗓️ PLANO PARA SEGUNDA-FEIRA

| Dia | Tarefa |
|---|---|
| Hoje (17/04) | Design System salvo ✅, home finalizada ✅ |
| Sábado (18/04) | `/auth` + `/scrims` (layout estático) |
| Domingo (19/04) | `/ranking` + `/campeonatos` + navegação linkada |
| Segunda (21/04) | Teste final mobile + deploy + divulgar |

---

## 🔗 NAVEGAÇÃO — O QUE LINKAR NO HEADER

```
Home        → /
Scrims      → /scrims
Ranking     → /ranking
Campeonatos → /campeonatos
Agentes L.  → /agentes-livres  (pode ser "em breve")
Entrar      → /auth
Cadastrar   → /auth?tab=register
```

---

## 📁 ONDE CRIAR OS ARQUIVOS

```
thezerobase/
  public/
    index.html              ← Home ✅
    auth/index.html         ← Login/Cadastro
    scrims/index.html       ← Scrims
    ranking/index.html      ← Ranking
    campeonatos/index.html  ← Campeonatos
    agentes-livres/index.html
    regras/index.html
```

**Next.js rewrite** em `next.config.ts` — já funciona para subpastas automaticamente.
