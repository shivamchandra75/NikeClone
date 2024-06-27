import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://yuhjwamycttdqfegmmwp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1aGp3YW15Y3R0ZHFmZWdtbXdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY4ODIwNjIsImV4cCI6MjAzMjQ1ODA2Mn0.G9VT2XZpvsrsM_iLVBfWTSu0-RjMT-gFGU6JOMu1IiA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
