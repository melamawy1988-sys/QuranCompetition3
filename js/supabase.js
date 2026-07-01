const SUPABASE_URL = "https://ifcynkytrgncpjervddn.supabase.co";

const SUPABASE_ANON_KEY = "ضع هنا مفتاح anon بالكامل";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
