import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://gjrinxrbjrcriujbgoia.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqcmlueHJianJjcml1amJnb2lhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2ODgyMTUsImV4cCI6MjA5NjI2NDIxNX0.QjEP_N_mPU4KQvG_wGrvvLG_yfhvbUeMV68NB2Ng75k';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);