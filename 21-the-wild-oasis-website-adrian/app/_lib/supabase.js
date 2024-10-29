import { createClient } from "@supabase/supabase-js";

// The variables are retrieved from file .env.local

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);
