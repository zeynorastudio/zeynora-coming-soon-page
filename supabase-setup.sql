-- Create prelaunch_leads table
CREATE TABLE IF NOT EXISTS prelaunch_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  source TEXT DEFAULT 'coming_soon',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE prelaunch_leads ENABLE ROW LEVEL SECURITY;

-- Create policy for anonymous inserts (public insert only)
CREATE POLICY "Allow anonymous inserts"
ON prelaunch_leads
FOR INSERT
TO anon
WITH CHECK (true);

-- Note: No read access for anonymous users (default RLS behavior blocks reads)

