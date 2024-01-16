import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://obkmaxjqxbfxsbypysst.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ia21heGpxeGJmeHNieXB5c3N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU0MjA0NjUsImV4cCI6MjAyMDk5NjQ2NX0.p43j5DVTgRBRtAdq4PZEta1kektt0H80x36HOCgjW4M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
