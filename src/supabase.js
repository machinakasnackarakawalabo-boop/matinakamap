import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://geqggqlfaqwpcazbjlxg.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_0-oeDbPpCWFX7RICB6mpGA_YR4gChOb';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
