import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ycynpunpovkngoctxqfv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljeW5wdW5wb3ZrbmdvY3R4cWZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk1NTM1MjUsImV4cCI6MjAwNTEyOTUyNX0.SeeT22O4LIDe300QPOcTyhr_ce3_vcIL5hgzblVxl4I";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
