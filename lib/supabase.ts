import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types based on real schema
export interface TzbScrim {
  id: string
  name: string
  tier: string
  format: string
  scheduled_at: string
  max_trios: number
  registered_trios: number
  kd_min: number
  status: string
  lobby_code: string | null
  scoring_model: string
  flyer_url: string | null
  created_at: string
}

export interface TzbCampeonato {
  id: string
  name: string
  category: string
  scoring_model: string
  format: string
  scheduled_at: string
  max_teams: number
  description: string | null
  status: string
  champion_team_id: string | null
  flyer_url: string | null
  created_at: string
}

export interface TzbTeam {
  id: string
  user_id: string | null
  display_name: string
  category: string
  pub_active: boolean
  banner_url: string | null
  logo_url: string | null
  description: string | null
  achievements: string | null
  discord: string | null
  youtube: string | null
  instagram: string | null
  twitter: string | null
  zero_points: number
  color: string
  created_at: string
  updated_at: string
}

export interface TzbPlayer {
  id: string
  team_id: string | null
  display_name: string
  handle: string | null
  photo_url: string | null
  position: number | null
  created_at: string
}

export interface TzbProfile {
  id: string
  auth_id: string | null
  name: string | null
  type: string
  role: string
  avatar_url: string | null
  free_agent: boolean
  player_role: string | null
  region: string | null
  kd: number | null
  free_agent_bio: string | null
  platform: string | null
  device: string | null
  discord: string | null
  instagram: string | null
  twitter: string | null
  youtube: string | null
  created_at: string
  updated_at: string
}

export interface TzbEventPoints {
  id: string
  event_id: string
  event_type: string
  team_id: string
  total_points: number
  total_kills: number
  best_placement: number | null
  drops_played: number
  is_champion: boolean
  updated_at: string
}
