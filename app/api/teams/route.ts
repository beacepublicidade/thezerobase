import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const pubActive = searchParams.get('pub_active')
  const limit = parseInt(searchParams.get('limit') || '20', 10)

  let query = supabaseAdmin
    .from('tzb_teams')
    .select('*')
    .order('zero_points', { ascending: false })
    .limit(limit)

  if (category) {
    query = query.eq('category', category)
  }
  if (pubActive === 'true') {
    query = query.eq('pub_active', true)
  }

  const { data, error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ data, count: data?.length ?? 0 })
}
