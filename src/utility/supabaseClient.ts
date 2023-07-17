import { createClient } from "@refinedev/supabase";

const SUPABASE_URL = "https://twptpgvahdxydbrtgnmx.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3cHRwZ3ZhaGR4eWRicnRnbm14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk0MDU2MDUsImV4cCI6MjAwNDk4MTYwNX0.7OjixINYUidlLoB_B1hr2ujniEfH8X1LGuo-_VM7ICg";
export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
