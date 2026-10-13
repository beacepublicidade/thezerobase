import { supabaseAdmin } from '@/lib/supabase-admin'

interface TableResult {
  table: string
  count: number
  sample: Record<string, unknown>[] | null
  error?: string
}

export default async function TestDbPage() {
  const tables = ['tzb_scrims', 'tzb_campeonatos', 'tzb_teams', 'tzb_players', 'tzb_profiles']
  const results: TableResult[] = []

  for (const table of tables) {
    const { data, error, count } = await supabaseAdmin
      .from(table)
      .select('*', { count: 'exact' })
      .limit(3)

    results.push({
      table,
      count: count ?? 0,
      sample: data as Record<string, unknown>[] | null,
      error: error?.message,
    })
  }

  const allOk = results.every((r) => !r.error)

  return (
    <div style={{ fontFamily: 'monospace', padding: '2rem', background: '#0a0a0a', minHeight: '100vh', color: '#e0e0e0' }}>
      <h1 style={{ color: '#00ff88', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
        🎮 The Zero Base — Supabase Connection Test
      </h1>
      <p style={{ color: allOk ? '#00ff88' : '#ff4444', marginBottom: '2rem' }}>
        Status: {allOk ? '✅ CONNECTED' : '⚠️ PARTIAL ERROR'}
      </p>

      {results.map((r) => (
        <div
          key={r.table}
          style={{
            marginBottom: '2rem',
            border: `1px solid ${r.error ? '#ff4444' : '#00ff8833'}`,
            borderRadius: '8px',
            padding: '1rem',
            background: '#111',
          }}
        >
          <h2 style={{ color: r.error ? '#ff4444' : '#00ff88', margin: '0 0 0.5rem' }}>
            {r.error ? '❌' : '✅'} {r.table}
            <span style={{ color: '#888', fontSize: '0.8rem', marginLeft: '1rem' }}>
              {r.count} row{r.count !== 1 ? 's' : ''}
            </span>
          </h2>
          {r.error && (
            <p style={{ color: '#ff4444', fontSize: '0.85rem' }}>Error: {r.error}</p>
          )}
          {r.sample && r.sample.length > 0 ? (
            <pre
              style={{
                fontSize: '0.75rem',
                color: '#aaa',
                overflow: 'auto',
                maxHeight: '200px',
                background: '#0a0a0a',
                padding: '0.75rem',
                borderRadius: '4px',
              }}
            >
              {JSON.stringify(r.sample, null, 2)}
            </pre>
          ) : (
            <p style={{ color: '#555', fontSize: '0.85rem' }}>No rows yet</p>
          )}
        </div>
      ))}

      <p style={{ color: '#555', fontSize: '0.75rem', marginTop: '2rem' }}>
        This page is for integration validation only. It will not appear in navigation.
      </p>
    </div>
  )
}
