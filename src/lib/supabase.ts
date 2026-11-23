// Supabase settings come from .env (see .env.example).
export const SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL ?? '';
export const SUPABASE_ANON_KEY = import.meta.env.PUBLIC_SUPABASE_ANON_KEY ?? '';

export const supabaseConfigured =
  SUPABASE_URL.startsWith('https://') && !SUPABASE_URL.includes('your-project-ref') && SUPABASE_ANON_KEY.length > 20;

export interface QuoteRequest {
  name: string;
  company: string | null;
  phone: string;
  email: string | null;
  service: string;
  message: string;
  language: 'fr' | 'ar';
}

/** Save a quote request. Uses the REST API directly so the public site stays light. */
export async function saveQuoteRequest(row: QuoteRequest): Promise<void> {
  if (!supabaseConfigured) throw new Error('Supabase is not configured');
  const res = await fetch(`${SUPABASE_URL}/rest/v1/demandes_devis`, {
    method: 'POST',
    headers: {
      // The apikey header alone identifies the request as "anon" (works with
      // both legacy anon JWTs and new sb_publishable_ keys).
      apikey: SUPABASE_ANON_KEY,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(row),
  });
  if (!res.ok) throw new Error(`Supabase insert failed (${res.status})`);
}
