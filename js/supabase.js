const SUPABASE_URL = "https://ifcynkytrgncpjervddn.supabase.co";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmY3lua3l0cmduY3BqZXJ2ZGRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI4MTc1ODMsImV4cCI6MjA5ODM5MzU4M30.tr9olNd_0ka5J7s9AxyhzBjtewlEqub937KBf5RlYzA";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
