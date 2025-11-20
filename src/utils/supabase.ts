import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://guqelcadnasnmbehgkch.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1cWVsY2FkbmFzbm1iZWhna2NoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwNDU2OTcsImV4cCI6MjA3ODYyMTY5N30.fRy1anGTTcjBab3NhwTZ4o1kL32O785HxfLKFAHr_KE";

export const supabase = createClient(supabaseUrl, supabaseKey);
