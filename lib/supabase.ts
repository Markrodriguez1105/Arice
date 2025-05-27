import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zqjzfwiqtxarfexmyovg.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpxanpmd2lxdHhhcmZleG15b3ZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzMzYxNDQsImV4cCI6MjA1OTkxMjE0NH0.K2KikhFB3URwVppm35co1TsUiRO7bWTSt9RXw_5iApo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
