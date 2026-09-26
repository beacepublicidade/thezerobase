---
name: The Zero Base — Rastreamento em Tempo Real
description: Memória viva do projeto — salva a cada input/discussão para não perder contexto em caso de queda de energia
type: project
---

# THE ZERO BASE — Estado em Tempo Real

**Objetivo Principal:** Site de torneios com foco em Warzone BR

**Última atualização:** 2026-04-16 (sessão iniciada)

---

## Inputs/Discussões da Sessão

### 📌 Definição do Projeto (2026-04-16)
- **Foco:** Site de torneios específico em Warzone
- **Tipos de eventos:** Torneios, scrims, personalizadas, 2v2
- **Prioridade:** Organizar ideias antes de implementar
- **Protocolo:** Memorizar TUDO em tempo real (padrão para TODOS os projetos)

### 🎨 Requirements de Design & Admin (2026-04-16)
**Backend de Personalização:**
- [ ] Editor visual: poder editar cada etapa/sessão do site
- [ ] Gerenciar assets por página/seção: background images, ícones, PNGs
- [ ] Editor de textos: headlines, copy
- [ ] Preview em tempo real das mudanças
- [ ] Sistema drag-and-drop ou interface intuitiva

**Assets:**
- ❌ NÃO usar nenhum asset da Activision
- ✅ Todos os assets devem ser originais ou licenciados

**APIs:**
- [ ] APIs exclusivas do site para integração com sistemas externos
- Integração com: Beacecaster, Zero Eye, LeadsOS (futuro)

---

## Arquitetura/Stack (a definir)

Frontend: (a definir - static + interactive?)
Backend: Node.js / Python? (para admin + APIs)
Database: Supabase (já mencionado no CLAUDE.md)
CMS: Headless ou custom?

---

## Funcionalidades Principais

### Públicas:
- Listagem de torneios/scrims
- Inscrição em eventos
- Ranking/Leaderboard
- Perfil de jogador

### Admin:
- **CMS Visual:** editor de cada seção do site
- **Asset Manager:** upload e gestão de imagens/ícones
- **Text Editor:** editar headlines, descrições
- **API Management:** visualizar endpoints, testar integrações

---

## Plano de Trabalho em FASES (2026-04-16)

### ✅ APROVADO: Trabalhar página por página, uma fase por vez

**Fase 1: Home (/) — 100% finalizada**
- [ ] Setup Next.js no Vercel
- [ ] Deploy home online (URL pública)
- [ ] Design + funcionalidade home perfeita
- [ ] Status: Em desenvolvimento

**Fase 2: Páginas Públicas (sem login)**
- [ ] /scrims
- [ ] /ranking
- [ ] /campeonatos
- [ ] /agentes-livres
- [ ] /perfil/[username]
- [ ] /regras
- [ ] /ajuda

**Fase 3: Autenticação**
- [ ] /auth (login/registro Google, Twitch, Discord)

**Fase 4: Páginas Privadas (pós-login)**
- [ ] /dashboard
- [ ] /dashboard/time
- [ ] /dashboard/inscricoes
- [ ] /overlay
- [ ] /admin

**Fase 5: Backend & APIs**
- [ ] APIs de integração (Beacecaster, etc)
- [ ] Admin CMS (editar design/assets/textos)

---

## Protocolo de Execução

1. **Cada fase:** Claude avisa quando 100% pronto
2. **Robson aprova:** "Tá 100%, vamos pra Fase 2"
3. **Próxima fase:** Claude começa imediatamente
4. **Iteração:** Otimizações acontecem conforme trabalha

---

## 🔧 PHASE 1 READY (2026-04-16)

**Status:** ✅ DOCUMENTAÇÃO COMPLETA — CÓDIGO PRONTO COMEÇAR

**Arquivo:** `PLANO_FASE_1_IMPLEMENTACAO.md`

**Contém:**
- Setup Next.js exato (commands, estrutura pastas)
- Tailwind config com tokens customizados
- 3 componentes core (Button, Header, Card)
- HeroSection skeleton com animations
- Checklist 3 semanas (semana por semana)
- Git workflow
- Deploy Vercel

**Próxima sessão:** Abrir arquivo e começar pelo:
1. `npm create-next-app@latest thezerobase`
2. Copiar `tailwind.config.ts` do arquivo
3. Criar `/src/components` e começar Button.tsx
4. Semana 1: Header + Hero
5. Semana 2: Sections 3-7
6. Semana 3: Sections 8-13 + deploy

---

## 📐 ESTRUTURA COMPLETA DO SITE (2026-04-16)

**Status:** ✅ PRONTO PARA IMPLEMENTAÇÃO
**Arquivo:** `ESTRUTURA_SITE_COMPLETO.md`

**Resumo:**
- Home: 13 seções estratégicas (hero + diferenciais + tabs + calendar + ranking + broadcasts + social proof + academy + CTAs + FAQ + footer)
- Públicas: 8 páginas (scrims, ranking, campeonatos, agentes-livres, perfil, academy, sobre, regras, ajuda)
- Autenticadas: 5 páginas (dashboard, time, inscrições, overlay, admin)
- Admin: 5 módulos (torneios, resultados, users, cms, patrocínios)
- APIs: 5 endpoints (torneios, ranking, stats, beacecaster, auth)

**Diferenciais salvo:**
- ORG-FIRST model (times como entidade central)
- 3 categorias simultâneas (Pro/Amador/Academy)
- 52 semanas de torneios (estável, não sazonal)
- Anti-cheat real-time (Zero Eye OCR integrado)
- Stats inteligentes (único mercado BR)
- Leaderboard persistente (carreira unificada)
- Design premium (dark + ouro + vermelho)

---

## 🔍 ANÁLISE DE COMPETIDORES BRASILEIROS (2026-04-16)

**Status:** ✅ ANÁLISE COMPLETA
**Arquivo:** `ANALISE_COMPETIDORES_BR.md`

### Principais Achados:

**Operadores ativos:**
1. **ExitLag ChampZ** (Líder) — 80 times, R$ 38k prêmios, 5.4k viewers
2. **Safe Monxtra** — 600k views total, conteúdo profissional em português
3. **bClutch** — 16k IG followers, comunidade desde 2021
4. **W1 League** — Tradicional, prêmios R$ 5-15k
5. **Pontes, Juxt, BeCrazy** — Inativas/fracas

**Gaps críticos identificados:**
- ❌ Sem plataforma unificada (rankings isolados)
- ❌ Sem anti-cheat robusto
- ❌ Sem formatos além de trios (duos/solos)
- ❌ Sem prêmios recorrentes (instabilidade)
- ❌ Transmissão amadora (100-500 viewers típico)

**The Zero Base está bem posicionado porque:**
- ✅ Tem Zero Eye (OCR/IA único)
- ✅ Tem leaderboard integrado ao Beacecaster
- ✅ Tem modelo comercial validado
- ✅ Timing certo (ExitLag provou demanda)

**Próximas ações (Fase 2):**
- [ ] Mapear todos 7 operadores
- [ ] Criar agregador público de rankings
- [ ] Duos Cup (novo formato)
- [ ] Partnership com ExitLag ou W1 League

---

## 🔴 MARCA & POSICIONAMENTO (CRÍTICO)

**THE ZERO BASE = A marca, o padrão profissional BR**

**CORRETO:**
- ✅ "The Zero Base - Primeira plataforma profissional brasileira"
- ✅ "Torneios para o jogo Call of Duty: Warzone" (descritivo)
- ✅ "The Zero Base dita o padrão BR"
- ✅ "By Big Gamers" (identidade)

**ERRADO:**
- ❌ "Warzone Official" (risco legal - Activision)
- ❌ "EWC" ou "World Series" (são Activision)
- ❌ "Our Official Warzone Tournament" (copyright + trademark)
- ❌ Usar logo/artwork Warzone (takedown direto)

**LEGAL:**
- Solicitar **Blizzard Community Competition License** (oficial, seguro)
- Mencionar descritivamente sem criar afiliação falsa
- Disclaimer nos termos: "Não oficial. Plataforma independente."
- Assets: Próprio logo The Zero Base (não Warzone)

---

## 🎯 DIFERENCIAL #1 — Modelo ORG-FIRST (vs concorrentes PLAYER-FIRST)

**Descoberta de Gap (2026-04-16):**
- Todos os concorrentes: Atleta → Time → Torneio
- **THE ZERO BASE:** Organização → Atletas → Torneio

**Por quê melhor:**
1. Esports é TIME-centric, não pessoa-centric
2. Orgs têm identidade visual, patrocínio, reputação
3. Atleta é substituível, ORG não
4. Marketplace B2B funciona (orgs anunciam vagas)
5. Leaderboard mostra TIMES, não jogadores solo

**Implementação:**
- Entidade central = ORGANIZAÇÃO
- Orgs têm página customizada (/org/[slug])
- Orgs gerenciam atletas (add/remove)
- Orgs se inscrevem em torneios (não atleta)
- Ranking por org + atletas

**Stack:** PostgreSQL schema com ORG como PK, ATLETAS como FK

---

---

## 🎯 DIFERENCIAL #2 — Marketplace de Eventos (ORG-Created)

**Conceito (Brainstorm 2026-04-16):**
- The Zero Base cria torneios próprios + promove no site
- **ORGs cadastradas também criam eventos** (torneios, scrims, salas customizadas)
- **Casuais também criam eventos** (não precisa ser org)
- Estrutura única para todos (eles usam template do site)

**Tipos de Eventos (Warzone 2026):**
- Battle Royale (Resurgência)
- 2v2 (duelo)
- Salas Personalizadas (custom rules)
- Scrims (treinamento)
- Academy Tournaments (Sub-18)

---

## 🎯 DIFERENCIAL #1.5 — Nomenclatura

**ORG-FIRST** (modelo central do The Zero Base) — Diferencial identificado em 16/04/2026

---

## 🎯 DIFERENCIAL #3 — Sistema ACADEMY com Career Track (MEGA DIFERENCIAL)

**Conceito (Brainstorm 2026-04-16) — ORG com 3 Linhas:**
1. **Profissional** (18+) → Competições oficiais (EWC, WSO)
2. **Amador** (qualquer idade) → Criadores, aspirantes, "várzea"
3. **Academy** (9-18) → Desenvolvimento de talentos → Carreira até 18 anos

**Story:** Jogador entra 12 anos → escalação por categorias → 18 anos vira PRO ou é vendido/recomendado

### 📊 Pesquisa — Lei Federal BR + Academias Esports + Futebol (2026-04-16)

**Lei Federal BR (ECA Digital / Lei Felca nº 15.211/2025):**
- ✅ Menores < 14: consentimento obrigatório dos pais
- ✅ Menores 14-17: consentimento + verificação de idade por acesso
- ✅ Proteção LGPD obrigatória (criptografia, anonimização)
- ✅ Comprovante escolar obrigatório (manter educação)
- ✅ Consentimento formal assinado (pais/responsável)
- ✅ Termo de formação (Lei 14.597 - não é vínculo empregatício)
- ❌ Nenhum dos concorrentes (CS2, Valorant, LoL) estrutura Academy por idade como futebol

**Estrutura Futebol Brasileiro (CBF - benchmark):**
- Sub-13: 12-13 anos
- Sub-15: 14-15 anos
- Sub-17: 16-17 anos
- Sub-20: 18-20 anos
- Profissional: 20+

**Faixa etária: 9-18 anos (mercado BR massive, mal trabalhado)
- ORGs criam "line Academy" (tipo time B, Sub-17 no futebol)
- Torneios Acadêmicos exclusivos (Academy vs Academy)
- Ranking de Academy com escalação → profissional
- Objetivo: Formar talentos desde cedo

**Diferenciador:**
- Esports BR não tem sistema estruturado de Academy
- Futebol tem (Sub-17 → profissional)
- Zero Base traz isso pro Warzone

**Estrutura sugerida:**
- PRO (16+): Torneios oficiais, prêmios, orgs principais
- ACADEMY (9-18): Torneios focados desenvolvimento, ranking, escalação
- CASUAL (qualquer): Eventos comunitários, não profissional

**Ranking Academy:**
- Top 10 > oportunidade tryout PRO
- Escalação automática quando atingir 16+ + performance
- Histórico "formado em Zero Base" como credencial

---

## 📊 PESQUISA DE MERCADO — Resultados (2026-04-16)

### Warzone 2026 — Formatos de Torneios (Base TRIOS)

**Base permanente:** TRIOS (sempre)

**Formatos de Torneio:**
- ✅ **Trios BR** (Battle Royale)
- ✅ **Trios Ressurgência** (respawn)
- ✅ **Scrims** (treino, trios)
- ✅ **Matchpoint** (EWC, WSO) — documentado em Big Gamers Broadcaster
- ✅ **Custom Format** — documentado em Big Gamers Broadcaster
- ⏳ **22/Swaggers** (dupla vs dupla, mesmo lobby, jogo separado) — Robson traz especificações depois

**Onde extrair info:** `/e/AREA DE TRABALHO ATUAL/01 - DOCUMENTOS/02 - PROJETOS CLAUDE CODE/BEGAMERS-CASTER/` ou similar (Big Gamers Broadcaster)

**Formatos Extraídos do Beacecaster (state.js - 2026-04-16):**

### 1. **EWC 2025** (Esports World Cup)
- **Match Point:** 135 pontos
- **Placement multiplier:**
  - 1º: 1.6x
  - 2-5º: 1.4x
  - 6-10º: 1.2x
  - 11-14º: 1.0x
- **Kills:** multiplicam a placement (kills × multiplier)
- **Mode:** Multiplicativo (kills × placement multiplier)

### 2. **WSOW** (World Series of Warzone)
- **Match Point:** 150 pontos
- **Placement multiplier:**
  - 1º: 2.0x
  - 2-5º: 1.8x
  - 6-10º: 1.6x
  - 11-20º: 1.4x
  - 21-30º: 1.2x
- **Kills:** multiplicam a placement
- **Mode:** Multiplicativo

### 3. **Pontos Corridos** (Flat)
- **Match Point:** Nenhum (sem match point)
- **Placement points:**
  - 1º: 15pts
  - 2º: 12pts
  - 3º: 10pts
  - 4º: 8pts
  - 5º: 7pts
  - 6-10º: 5pts
  - 11-20º: 3pts
  - 21+: 1pt
- **Kills:** somam aos placement points (não multiplicam)
- **Mode:** Flat/Aditivo

### 4. **Custom Format** (à definir)
- Flexível para torneios próprios/regionais

**Protocolo:**
- Formatos EWC, WSOW, Pontos Corridos já documentados
- 22/Swaggers: Robson traz especificações completas depois
- NÃO adicionar até ter spec completa
- Manter memória limpa

---

### Academy em Esports — Benchmarks
| Jogo | Modelo | Gap |
|---|---|---|
| Valorant | Partnered Academy → VCT | Sem monetização |
| CS2 | WePlay Academy (15-17) → T1 | Estruturado mas mínimo remuneração |
| LoL | Academy rosters → Regional | Org-dependent |

**Padrão que funciona:**
1. Talent ID (9-14) → 2. Academy (15-17) → 3. Profissional (18+)

---

### Gap Real no Mercado BR
- ❌ Liga Escolar (discovery) NÃO conecta a circuito profissional
- ❌ Sem remuneração para Academy (diferente do futebol)
- ❌ Sem plataforma de scouting integrada
- ✅ **ZERO BASE pode ser PRIMEIRA a fazer isso**

---

### Modelo Futebol que Funciona (adaptável)
- Sub-17 → Sub-20 → Profissional
- Contrato remunerado desde Sub-17
- Exposição via campeonatos regionais
- Scouting estabelecido

**Adaptabilidade para Warzone:**
- ✅ Estrutura etária clara
- ✅ Remuneração desde Academy (ineditismo BR)
- ✅ Circuito integrado (online = sem limite geográfico)

---

### 📋 BRAINSTORM — Pesquisas Completadas
- [x] Formatos Warzone 2026
- [x] Como CS2/Valorant/LOL estruturam Academy
- [ ] Legislação BR sobre menores em competições (próxima fase)
- [ ] Modelo de monetização Academy específico (próxima fase)

---

---

## 🏆 PROPOSTA COMPLETA — 3 CATEGORIAS (CAREER TRACK SYSTEM)

### RESUMO EXECUTIVO

**Objetivo:** Criar o **padrão profissional do Warzone BR**, estruturando 3 categorias com widgets, estatísticas e monetização clara. Modelo ORG-FIRST permite que cada organização tenha as 3 linhas simultâneas.

**Diferencial:** Primeira plataforma BR com carreira estruturada (como futebol) + estatísticas em tempo real (Zero Eye) + transferência transparente.

---

## 📊 CATEGORIA 1 — AMADOR (Várzea do Warzone)

### Objetivo
- Democratizar competição (qualquer um pode participar)
- Descoberta de talentos
- Entretenimento + socialização
- Monetização progressiva baixa (caminho pra semi-pro)

### Participação
- ✅ Sem restrições (apenas cadastro)
- ✅ Times com 3-4 jogadores
- ✅ Torneios mensais/semanais
- ✅ Ranking unificado BR (ineditismo!)

### Prêmios & Monetização
- **Modelo Base:**
  - Inscrição time: R$ 50-100
  - Premiação: 1º R$ 500 / 2º R$ 300 / 3º R$ 200
  - Prize pool total por torneio: ~R$ 5-10k

- **Modelo Premium:**
  - Membros pagam R$ 9,90/mês (acesso a rankings + stats)
  - Streamers monetizam via Beacecaster ads
  - Patrocínios locais nas camisetas

### Widgets/Estatísticas Específicas
```
AMADOR DASHBOARD:
├── Ranking Unificado BR
│   ├── Top 50 times
│   ├── Top 50 jogadores
│   └── Por região/estado
│
├── Perfil do Jogador
│   ├── Win Rate
│   ├── K/D médio
│   ├── Torneios disputados
│   ├── Histórico (últimas 20 partidas)
│   └── Valor de mercado estimado (R$)
│
├── Histórico de Times
│   ├── Evolução mês-a-mês
│   ├── Comparação com similares
│   ├── Trending (em alta/baixa)
│   └── "Pronto pra profissional?" (sugestão)
│
├── Transmissão
│   ├── Embed no site (Beacecaster)
│   ├── Monetização via ads
│   └── Clips automáticos (TikTok/Instagram)
│
└── Scouting Light
    └── PDF básico (K/D, placements, win rate)
```

### Escada de Progression
```
AMADOR (todos)
  ↓
SEMI-PRO (top 10% em 6 meses)
  ↓
PROFISSIONAL (contratado por org)
```

---

## 🥇 CATEGORIA 2 — PROFISSIONAL (Série A do Warzone)

### Objetivo
- Competição de elite (18+, contrato obrigatório)
- Lucratividade para jogadores/orgs
- Padrão internacional (EWC, WSO, Esports World Cup)
- Mercado de transferências transparente

### Participação
- ✅ Apenas orgs cadastradas (credibilidade)
- ✅ Times com contrato profissional registrado
- ✅ Trios (formato oficial)
- ✅ 1 torneio oficial/semana (formato: EWC ou WSOW)

### Prêmios & Monetização
- **Prize Pool (por torneio):**
  - Semanal: R$ 50-100k distribuído
  - Mensal Championship: R$ 200-500k
  - Trimestral Grand Prix: R$ 1-2M

- **Modelos de Receita:**
  - Sponsorships: orgs/streamers pagam R$ 10-50k/season
  - Streaming rights: Beacecaster + plataformas (Twitch, YouTube) = %
  - Betting: Integração com casas de apostas (5-10% comissão)
  - Premium tier: Fãs pagam R$ 49/mês (stats avançadas, acesso exclusivo)

### Widgets/Estatísticas Específicas
```
PROFISSIONAL DASHBOARD:
├── Ranking Nacional (Série A Warzone)
│   ├── Top 20 times (por pontos)
│   ├── Top 50 jogadores individuais
│   ├── Top streamers (by viewers)
│   └── Trending (subidas/quedas)
│
├── Perfil do Profissional
│   ├── Histórico completo de contrato
│   ├── Transferências (data, valor, org anterior/nova)
│   ├── Estatísticas avançadas
│   │   ├── % Headshots
│   │   ├── Mapa favorito (winrate por mapa)
│   │   ├── Positioning favorito (drop zone)
│   │   ├── Consistência (desvio padrão K/D)
│   │   └── Clutch factor (% 1v1 ganhas)
│   ├── Audiência gerada (horas streamed, picos)
│   ├── Valor de mercado (Transfermarkt-style)
│   │   └── Baseado em: performance + edad + trending
│   └── Comparação com similares (jogadores mesma posição)
│
├── Time (Org)
│   ├── Histórico de transferências
│   ├── Química do time (% winrate quando junto)
│   ├── Trajectory (tendência 3-6 meses)
│   ├── Investimentos (total salários, investimento)
│   ├── ROI (prêmios ganhos vs investimento)
│   └── "Time Ready for Worlds?" (análise)
│
├── Transfer Market
│   ├── Jogadores disponíveis (com valor estimado)
│   ├── Histórico de negociações (valores públicos)
│   ├── Notícias de mercado (em tempo real)
│   └── Negoçiação facilitada (ofertas no site)
│
├── Transmissão Premium
│   ├── Beacecaster + overlay stats ao vivo
│   ├── Multi-PoV (câmera em cada jogador)
│   ├── Análise tática (pause, replay, angles)
│   ├── Monetização: subs + ads + sponsorships
│   └── Clip automático (highlights para redes)
│
├── Scouting Document PRO
│   ├── PDF profissional (completo)
│   ├── Todas as estadísticas avançadas
│   ├── Vídeo highlights de 3 min
│   ├── Recomendação (scout AI)
│   └── Exportável para agentes/orgs
│
└── Analytics para Orgs
    ├── ROI de jogador (prêmios/investimento)
    ├── Performance trends
    ├── Comparação com mercado
    └── Recomendações (contratar/vender)
```

### Escala de Progression
```
PROFISSIONAL (elite)
  ├── TIER 1: Times que ganham EWC/WSO (salários: R$ 50-150k/mês)
  ├── TIER 2: Times competitivos (salários: R$ 20-50k/mês)
  └── TIER 3: Times iniciantes (salários: R$ 10-20k/mês)

  ↑
  Valor de mercado varia conforme tier + performance
```

### Transfer Market
```
Sistema Transparente (like Transfermarkt):
- Jogador A (TIER 2) vale R$ 200k-500k
- Org pode fazer oferta via plataforma
- Negociação facilitada (contrato, buyout, duração)
- Histórico público (valores, datas)
- Comissão The Zero Base: 5-10% da negociação
```

---

## SÍNTESE — 3 CATEGORIAS

| Aspecto | AMADOR | PROFISSIONAL |
|---------|---------|-----------|
| **Quem** | Todos | Org + contrato |
| **Objetivo** | Lazer + discovery | Elite + lucro |
| **Renda jogador** | R$ 0-500/torneio | R$ 10k-150k/mês |
| **Widgets** | Básicos (W/L, K/D, rank) | Avançados (stats, transfers, trending) |
| **Transmissão** | Simples | Premium (multi-PoV, stats) |
| **Scouting** | Light (PDF básico) | Pro (completo + video) |
| **Mercado** | Nenhum | Transferência transparente |

---

## 🎯 DIFERENCIAL COMPETITIVO — THE ZERO BASE

**O que ninguém tem:**

1. ✅ **Career Track estruturado** (Academy → Amador → Profissional, como futebol)
2. ✅ **Dados em tempo real** (Zero Eye = estatísticas únicas)
3. ✅ **Transfer Market transparente** (Warzone não tem isso)
4. ✅ **3 linhas por ORG** (Profissional + Amador + Academy simultâneos)
5. ✅ **Orientação profissional** (guias, checklists, educação)
6. ✅ **Beacecaster integrado** (transmissão padronizada + monetização)
7. ✅ **Mercado lucrativo estruturado** (orgs ganham dinheiro, não perdem)

**Valor Percebido:**
- Para Jogadores: Carreira estruturada, visibilidade, monetização
- Para Orgs: Descoberta de talentos, transfer market, ROI claro
- Para Marcas: Audiência centralizada, dados para targeted marketing
- Para Brasil: Padrão profissional (como futebol tem CBF)

---

---

## 💰 MODELO COMERCIAL — PRONTO PRAT IMPLEMENTAÇÃO (2026-04-16)

**Arquivo:** `MODELO_COMERCIAL.md` (na pasta do projeto)

**Status:** ✅ Pronto semana 1

---

## 💰 MODELO COMERCIAL — Torneios Amadores Pagos + Membership (2026-04-16)

### Ideia Principal
- **Membership:** R$ X/mês (acesso exclusivo, descontos, cupons)
- **Torneios:** Times pagam entrada (R$ 50-80 por trio)
- **The Zero Base fica com %** da entrada (resto premiação + overhead)
- **Calendário anual** com torneios regulares

### Problema Atual (Mercado)
- Plataformas cobram entrada R$ 50-70 por trio
- Mas NÃO revertem em premiação (ficam com 100%)
- Resultado: comunidade fica puta, sai pra outra plataforma
- **THE ZERO BASE faz diferente:** premiação + infraestrutura clara

---

### 📊 Pesquisa — Modelo Activision vs Plataformas Brasileiras

**Activision Warzone 2026:**
- ✅ Prize Pool: $1.2M total (4 torneios regionais + 1 global)
- ✅ **Entrada: GRATUITA** (aberto via FACEIT)
- ✅ Receita: patrocínio, media rights, cosmetics (NÃO entrada)

**Plataformas Brasil (Gamers Club, Arena Digital):**
- ✅ Cobram entrada R$ 50-500 (depende tier)
- ✅ Split padrão: 70-80% prêmios, 10-20% plataforma, 10-30% overhead
- ✅ Membership MAIS torneios pagos = dupla monetização

**Recomendação:**
Hybrid model (como Gamers Club):
- Membership pra acesso + descontos
- MAIS torneios pagos com split justo (80% prêmios)

---

### 💰 MATEMÁTICA COMERCIAL (The Zero Base)

#### Cenário A: Básico (2 torneios/mês)
```
2 torneios × 100 trios × R$ 50 = R$ 10k/mês entrada

Distribuição:
├─ Prêmios (70%): R$ 7k
├─ The Zero Base (15%): R$ 1.5k
└─ Infraestrutura/Servidor/Admin (15%): R$ 1.5k

✅ Viável: R$ 1.5k/mês profit
❌ Problema: Apertado, sem margem pra crescimento
```

#### Cenário B: Intermediário (3 torneios/mês + patrocínio)
```
3 torneios × 120 trios × R$ 60 = R$ 21.6k entrada
+ Patrocínio local: R$ 4-6k (1-2 brands)
= R$ 25-27k/mês

Distribuição:
├─ Prêmios (70% entrada): R$ 15k
├─ The Zero Base (15% entrada): R$ 3.2k
├─ Infraestrutura (15%): R$ 3.2k
└─ (Patrocínio fica inteiro pra The Zero Base)

✅ RECOMENDADO: R$ 5-6k/mês profit operacional
✅ Escalável
```

#### Cenário C: Premium (4 torneios/mês + 2 sponsors)
```
4 torneios × 150 trios × R$ 70 = R$ 42k entrada
+ Patrocínio: R$ 10-15k (2-3 brands nacionais)
= R$ 52-57k/mês

Distribuição:
├─ Prêmios (70%): R$ 29.4k
├─ The Zero Base (15%): R$ 6.3k
├─ Infraestrutura (15%): R$ 6.3k
└─ (Patrocínio fica inteiro)

✅ ROBUSTO: R$ 10-12k/mês profit puro
✅ Mercado profissional sustentável
```

---

### 📋 RECOMMENDATION: Começar com Cenário B

**Mês 1-3:**
- 2 torneios/mês, R$ 50 entrada, target 100 trios
- Sem patrocínio (validar modelo)
- Lucro: R$ 1.5k/mês

**Mês 4-6:**
- 3 torneios/mês, R$ 60 entrada, target 120 trios
- + 1-2 patrocínios locais (R$ 3-5k)
- Lucro: R$ 4-6k/mês

**Mês 7+:**
- 3-4 torneios/mês, R$ 70 entrada, target 150+ trios
- + 2-3 patrocínios nacionais (R$ 10-15k)
- Lucro: R$ 8-12k/mês

---

### 🏅 MEMBERSHIP + TORNEIOS PAGOS (Dupla Monetização)

**Membership Amador (R$ 9,90-19,90/mês):**
- ✅ Acesso exclusivo a torneios (inscrição 24h antecipada)
- ✅ Desconto na entrada (-10-20%)
- ✅ Cupons (Kabum, Pichau, brands parceiras)
- ✅ Stats avançadas + histórico detalhado
- ✅ Discord VIP + canais privados
- ✅ Acesso a coaching/análise de replays

**Torneios Pagos:**
- Entrada = R$ 50-80 (conforme prestige)
- Membership oferece desconto (-R$ 5-10 por entrada)
- Resultado: membros ganham ROI em 5-10 torneios

**Exemplo de ROI:**
```
Membership: R$ 19,90/mês
Participa 10 torneios/mês:
├─ Sem membership: 10 × R$ 70 = R$ 700
├─ Com membership: R$ 19,90 + (10 × R$ 60) = R$ 619,90
└─ Economia: R$ 80,10 (11% desconto)

Resultado: Jogador paga membership, economiza entrada, fica feliz.
```

---

### 🎬 WIDGETS — Públicos vs Exclusivos

**Dados Públicos (website, broadcast, comunidade):**
- Placar em tempo real (delay 5-10min)
- Kill feed (sem locação exata)
- Top 5 times/jogadores (por torneio)
- Highlights/clips (pós-match)
- Replay completo (24-48h depois)
- Ranking anual (acumulado)

**Dados Exclusivos (team login, admin):**
- Posições em tempo real (vídeo 360º via Zero Eye)
- Loot de cada jogador
- Comunicação no comms (áudio team)
- Analytics ofensivo/defensivo
- Comparação com rivais (dados escondidos)
- Anti-cheat flags (suspeitas)

**Fair Play:**
- Dados exclusivos NÃO vazam pra rival (NDA obrigatório)
- Publicam só 24-48h depois (evita meta análise ao vivo)
- Anti-match-fixing: analisa padrões suspeitos (tipo Riot Games)

---

### 📅 CALENDÁRIO SUSTENTÁVEL

**3 torneios/mês recomendado:**
```
SEMANA 1: Torneio Aberto (100-150 trios, entrada R$ 50)
SEMANA 2-3: Pausa (análise dados, updates)
SEMANA 4: Série Ranked (acumula pontos ranking anual)
```

**Por Trimestre:**
- **T1 (Jan-Mar):** Aquecimento, descoberta de times
- **T2 (Apr-Jun):** Qualificadores regionais (SP, RJ, MG)
- **T3 (Jul-Set):** Torneios majors (R$ 15k+ prêmios)
- **T4 (Out-Dez):** Finals (regional + nacional championship)

---

### 💡 ATRAÇÃO DE PATROCÍNIO

**Tier 1 - Local/Regional (R$ 3-8k/mês):**
- Lojas gaming (Pichau, Kabum), cafés PCs, internet (Vivo, Claro)
- Propostas: logo overlay, booth em LAN finals, cupom desconto

**Tier 2 - Nacional (R$ 5-20k/mês):**
- Gaming brands (ASUS, Corsair, Razer), bebidas (Monster), telecom (Tim, Claro Gaming)
- Propostas: torneio branded, prize pool adicional, cosmetics in-game

**Tier 3 - Publisher (Activision - futuro):**
- Se atingir 5k+ jogadores/mês, Activision oferece:
  - Official sanctioning
  - APIs do Warzone
  - Revenue share cosmetics
  - Prize pool matching (Activision duplica)

---

### 📊 PROJEÇÃO 18 MESES

| Período | Trios/Mês | Entrada | Receita | Patrocínio | Lucro The Zero Base |
|---------|----------|---------|---------|-----------|--------------|
| **Mês 1-3** | 250 | R$50 | R$12.5k | R$0 | R$1.9k |
| **Mês 4-6** | 350 | R$60 | R$21k | R$4k | R$5k |
| **Mês 7-9** | 450 | R$65 | R$29.25k | R$8k | R$7.5k |
| **Mês 10-12** | 600 | R$70 | R$42k | R$12k | R$10.8k |
| **Mês 13-15** | 750 | R$75 | R$56.25k | R$15k | R$14.25k |
| **Mês 16-18** | 900 | R$80 | R$72k | R$20k | R$18.4k |

**Total 18 meses:**
- Receita entrada: R$ 325k
- Receita patrocínio: R$ 59k
- **Receita total: R$ 384k**
- **Lucro The Zero Base: R$ 57.8k** (~15% margem operacional)

---

---

## 📋 DOCUMENTAÇÃO COMPLETA DO PROJETO

**Arquivos salvos na pasta:**
- `MODELO_COMERCIAL.md` — Fórmula de lucro semanal (R$ 3.7k+)
- `PLANO_COMERCIAL_MARCAS.md` — Pacotes patrocínio + calendário + pitch
- `RESUMO_IMPLEMENTACAO.md` — Visão geral 100% do projeto, fases, timeline

**Status:** ✅ Pronto implementar Fase 1

---

**NOTA:** Este arquivo é atualizado em TEMPO REAL. Não espera fim da sessão.
