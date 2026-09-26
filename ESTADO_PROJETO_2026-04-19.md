# THE ZERO BASE — Estado do Projeto
**Salvo em:** 2026-04-19
**URL produção:** https://thezerobase.vercel.app
**Pasta local:** C:/Users/Robson Catatal/thezerobase
**Deploy:** `cd "C:/Users/Robson Catatal/thezerobase" && npx vercel --prod`

---

## STACK
- Next.js + HTML estático em `/public` + Bootstrap 4
- Supabase: `hcpbpnwpdkvlonqoqchs` (sa-east-1)
- Supabase Storage: bucket `tzb-media` (Public) — banners/ e logos/
- Vercel (sem GitHub remote)

---

## PÁGINAS EXISTENTES (todas em `/public`)

| Página | Arquivo | Status |
|---|---|---|
| Home | `index.html` | ✅ completo |
| Campeonatos | `campeonatos.html` | ✅ completo |
| Scrims | `scrims.html` | ✅ Supabase integrado |
| Ranking | `ranking.html` | ✅ zero_points real |
| Agentes Livres | `agentes-livres.html` | ✅ completo |
| Regras / LGPD | `regras.html` | ✅ completo |
| Auth (login/cadastro) | `auth.html` | ✅ completo |
| Dashboard do usuário | `dashboard.html` | ✅ completo |
| Página pública do time | `time.html?id=<teamId>` | ✅ completo |
| Admin panel | `admin.html` | ✅ senha: tzb@admin2026 |

---

## SUPABASE — TABELAS

| Tabela | Descrição | Colunas relevantes |
|---|---|---|
| `tzb_profiles` | Perfis de jogadores | id, name, type, avatar_url, free_agent, player_role, region, kd, free_agent_bio, platform, device, role |
| `tzb_teams` | Times/orgs | id, user_id, display_name, category, pub_active, banner_url, description, achievements, discord, youtube, instagram, twitter, zero_points |
| `tzb_roster` | Jogadores dos times | id, team_id, nick, fullname, role, kd, captain, photo_url, sort_order |
| `tzb_scrims` | Scrims | id, name, tier, format, scheduled_at, max_trios, registered_trios, kd_min, status, lobby_code, scoring_model |
| `tzb_scrim_registrations` | Inscrições em scrims | id, scrim_id, team_id, user_id, registered_at, status |
| `tzb_campeonatos` | Campeonatos | id, name, category, scoring_model, format, scheduled_at, max_teams, description, status |
| `tzb_salas` | Salas personalizadas | id, name, creator, scheduled_at, lobby_code, description, status |

---

## SUPABASE — STORAGE
- Bucket: `tzb-media` (Public)
- `banners/<teamId>/banner.<ext>` — banner do time
- `logos/<userId>/logo.<ext>` — logo do jogador/time

---

## ADMIN PANEL (`/admin.html`)
**Senha:** `tzb@admin2026`

### Funcionalidades:
- **Dashboard:** métricas (times, jogadores, scrims, inscrições) + plataformas dos jogadores
- **Scrims:** criar, publicar lobby code, encerrar, lançar resultados → calcula ZERO Points
- **Campeonatos:** criar com modelo de pontuação
- **Salas Personalizadas:** criar lobbies para creators
- **Usuários:** credenciar como Creator / Organizer / Player
- **Times:** editar ZERO Points, ativar/desativar página pública

---

## MODELOS DE PONTUAÇÃO (do Begamers Broadcaster)

### Pontos Corridos (padrão BR)
- 1º=15pts, 2º=12, 3º=10, 4º=8, 5º=7, 6-10º=5, 11-20º=3, 21+=1 + kills diretos
- Sem Match Point — campeão = maior total

### EWC 2025
- Kills × multiplicador: 1º=1.6×, 2-5º=1.4×, 6-10º=1.2×, 11+=1.0×
- Match Point: 135

### WSOW
- Kills × multiplicador: 1º=2.0×, 2-5º=1.8×, 6-10º=1.6×, 11-20º=1.4×, 21-30º=1.2×, 31+=1.0×
- Match Point: 150

---

## PAPÉIS NA PLATAFORMA

| Role | Quem | Acesso |
|---|---|---|
| Super Admin (Robson) | Dono | `/admin.html` — cria tudo |
| Organizer | Credenciado por Robson | Developer Base (futuro) — cria eventos próprios |
| Creator | Credenciado por Robson | Salas Personalizadas + ferramentas broadcast |
| team | Time/org cadastrada | Dashboard, página pública, ZERO Points |
| player | Jogador individual | Dashboard, agente livre |

---

## FUNCIONALIDADES DO DASHBOARD (por tipo de usuário)

### Player:
- Editar perfil (nome, avatar, plataforma, device)
- Agente Livre (toggle + role + região + bio)
- Ver scrims disponíveis e inscrições ativas

### Time/Org:
- Editar perfil do time (banner, logo, descrição, conquistas, redes sociais)
- Gerenciar roster (até 6 jogadores: nick, KD, role, capitão, foto)
- Página pública ativa/inativa
- Ver scrims inscritos

---

## COPY / CONCEITO (resumo)

- **Posicionamento:** "The Zero Base. O padrão do Warzone brasileiro."
- **NÃO usar:** torneio, liga, série (Activision IP)
- **USAR:** competição, copa, circuito, temporada
- **NÃO mostrar:** valor de inscrição + prize pool juntos
- **NÃO prometer:** salário/contrato — comunicar como caminho de carreira possível
- **TOM:** aspiracional, educacional, brasileiro

---

## PRÓXIMOS PASSOS (fila)

1. **`/personalizadas`** — página pública listando salas dos creators
2. **`/sobre`** — manifesto e apresentação da TZB para novos visitantes
3. **Developer Base** — dashboard do organizador credenciado
4. **Integração Beacecaster ↔ TZB** — Zero Eye envia stats automáticas
5. **Ranking de jogadores individuais** (aba que mostra "em breve")
6. **Ferramentas de broadcast para creators** — widgets/overlays no hub

---

## OBSERVAÇÕES IMPORTANTES

- O slider de orgs na home já é dinâmico — puxa do Supabase quando times têm `pub_active=true`
- O campo `role` em `tzb_profiles` controla acesso: 'player', 'creator', 'organizer'
- A FK `tzb_teams.user_id → tzb_profiles.id` pode precisar ser criada manualmente se o join do slider não funcionar
- Senha admin é hardcoded — mudar para Supabase role quando tiver mais admins
