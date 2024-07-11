import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dleclscftllkewrzixmp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsZWNsc2NmdGxsa2V3cnppeG1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA1Mzc4NTQsImV4cCI6MjAzNjExMzg1NH0.2-HZ9oR9McA3fXsKaJHNEOBf3b8l3RhbKy4t0rGL-jA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
