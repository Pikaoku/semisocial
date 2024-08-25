import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	'https://mtnuastqukqkeyayximy.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10bnVhc3RxdWtxa2V5YXl4aW15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1ODk3OTYsImV4cCI6MjA0MDE2NTc5Nn0.8CqGWqDtgQJfMaBA8U_O7GvrB-jQY4p9o04r_HnOugw'
);
