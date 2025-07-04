
import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

const supabaseUrl = 'https://xxligvixjmrjngqobnrr.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4bGlndml4am1yam5ncW9ibnJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1MTI2ODksImV4cCI6MjA2NzA4ODY4OX0.u105cXOHkJWiAzBTvy9Hw5tQt7j0KBeqpj_zutd1C-Y'

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)
