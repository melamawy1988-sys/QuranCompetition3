const SUPABASE_URL = "https://ifcynkytrgncpjervddn.supabase.co";

const SUPABASE_ANON_KEY = "ضع مفتاح anon الحقيقي هنا";

const db = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
