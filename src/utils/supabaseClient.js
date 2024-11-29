import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rngdrlvjeddymqvbvxcj.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

// process.env.SUPABASE_KEY; 환경변수