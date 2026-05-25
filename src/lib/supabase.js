import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://gzyyqxuuzfhrsvushisi.supabase.co";

const supabaseKey =
  "sb_publishable_7VBgt42qPVyjTD8b89FhGA_DovL8feV";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
//this is supabase messages