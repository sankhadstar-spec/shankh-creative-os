import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://vkdmnxniokkjubsrhck.supabase.co';
const supabaseKey = 'sb_publishable_XCM4c7UuLYBHMks2ThI99w_Iq-9M...';
export const supabase = createClient(supabaseUrl, supabaseKey);
