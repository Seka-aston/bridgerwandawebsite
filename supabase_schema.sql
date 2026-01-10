-- SQL for setting up Bridge Rwanda Supabase Schema

-- 1. Programs Table
CREATE TABLE programs (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  long_description TEXT NOT NULL,
  objectives TEXT[] NOT NULL,
  duration TEXT NOT NULL,
  requirements TEXT[] NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Testimonials Table
CREATE TABLE testimonials (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  program TEXT NOT NULL,
  quote TEXT NOT NULL,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Resources Table
CREATE TABLE resources (
  id SERIAL PRIMARY KEY,
  type TEXT NOT NULL CHECK (type IN ('Blog', 'Webinar', 'Mentorship Guide')),
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  date TEXT NOT NULL,
  author TEXT,
  link TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Contact Submissions Table
CREATE TABLE contact_submissions (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Applications Table
CREATE TABLE applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  program_id TEXT REFERENCES programs(id),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  dob DATE NOT NULL,
  gender TEXT NOT NULL,
  nationality TEXT NOT NULL,
  academic_level TEXT NOT NULL,
  field_of_study TEXT NOT NULL,
  institution TEXT NOT NULL,
  last_trimester_score TEXT NOT NULL,
  id_document_url TEXT,
  proof_of_payment_url TEXT,
  transcript_url TEXT,
  preferred_university TEXT,
  hoped_change TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable Row Level Security (RLS)
ALTER TABLE programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Public read access for content
CREATE POLICY "Allow public read access for programs" ON programs FOR SELECT USING (true);
CREATE POLICY "Allow public read access for testimonials" ON testimonials FOR SELECT USING (true);
CREATE POLICY "Allow public read access for resources" ON resources FOR SELECT USING (true);

-- Submission policies
CREATE POLICY "Allow public insert for contact_submissions" ON contact_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow authenticated users to create applications" ON applications FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);
CREATE POLICY "Allow users to view their own applications" ON applications FOR SELECT USING (auth.uid() = user_id);

-- Storage setup (Instructional: Create a bucket named 'application-documents' in Supabase Storage)



