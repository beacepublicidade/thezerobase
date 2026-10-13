import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function GET() {
  // Get event points ranked by total_points for campeonatos
  const { data, error } = await supabaseAdmin
    .from('tzb_event_points')
    .select(`
      *,
      tzb_teams!tzb_event_points_team_id_fkey (
        id, display_name, logo_url, category, color
      )
    `)
    .order('total_points', { ascending: false })
    .limit(50)

  if (error) {
    // Fallback: return teams sorted by zero_points if event_points join fails
    const { data: teams, error: teamsError } = await supabaseAdmin
      .from('tzb_teams')
      .select('id, display_name, logo_url, category, zero_points, color')
      .eq('pub_active', true)
      .order('zero_points', { ascending: false })
      .limit(50)

    if (teamsError) {
      return NextResponse.json({ error: teamsError.message }, { status: 500 })
    }

    return NextResponse.json({ data: teams, source: 'teams', count: teams?.length ?? 0 })
  }

  return NextResponse.json({ data, source: 'event_points', count: data?.length ?? 0 })
}
