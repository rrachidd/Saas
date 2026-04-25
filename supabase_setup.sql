-- SQL to create the inquiry submissions table in Supabase
-- This corresponds to Prompt 3 in the user request

CREATE TABLE IF NOT EXISTS inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'archived'))
);

-- Enable Row Level Security (RLS)
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Policy: Only admins can view inquiry submissions
-- Note: Replace 'admin' with your actual admin role or check for specific metadata
CREATE POLICY "Admins can view and delete inquiries" ON inquiries
  FOR ALL
  USING (auth.jwt() ->> 'email' = 'admin@nexussaas.com') -- Example check
  WITH CHECK (auth.jwt() ->> 'email' = 'admin@nexussaas.com');

-- Policy: Anyone can insert (submit) an inquiry
CREATE POLICY "Anyone can submit an inquiry" ON inquiries
  FOR INSERT
  WITH CHECK (true);
