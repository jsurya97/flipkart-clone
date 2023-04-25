import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://khqcfalqhantthrkhwfg.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtocWNmYWxxaGFudHRocmtod2ZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY1NjAxNzgsImV4cCI6MTk5MjEzNjE3OH0.RiuieoW5e7mEC6wRyAXiC9q9iis71d4FtH_f3jECBLQ')

export default supabase;