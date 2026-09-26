# CLAUDE.md — THE ZERO BASE

**Projeto:** Plataforma esports Warzone para Big Gamers
**Stack:** Next.js 14, Supabase (pgvector), TailwindCSS
**Status:** Conceitual/MVP. Auth em planejamento.

---

## Credenciais

```
NEXT_PUBLIC_SUPABASE_URL=https://...supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=...
GOOGLE_CLIENT_ID=...apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=...
```

---

## Features MVP

- [x] Auth (Google OAuth + Discord)
- [x] User Profile (rank, stats, team)
- [x] Scrims Management
- [x] Live Leaderboard (integração ZERO EYE)
- [x] Match History

---

## Setup

```bash
npm install
npm run dev
# http://localhost:3000
```

---

## Integração

- **ZERO EYE** → Envia dados de HUD ao vivo
- **Beacecaster** → Exibe leaderboard em broadcasts
- **LeadsOS** → Gerenciamento de times/patrocinadores

---

## Próximo

- MVP launch (Warzone first)
- Multi-game support (Valorant, CS2)
- Marketplace de times/coaches
