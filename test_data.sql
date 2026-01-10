-- SQL to insert test data for connection verification
INSERT INTO programs (id, title, description, long_description, objectives, duration, requirements)
VALUES 
('test-vocational', 'Vocational Training', 'Practical skills training for TVET students.', 'This is a test program to verify Supabase connection. It should appear on the home page.', '{"Learn Supabase", "Test Connection"}', '4 Weeks', '{"Active account", "Internet access"}'),
('test-business', 'Business Incubation', 'Helping student entrepreneurs start their journey.', 'Another test program for verification.', '{"Build business plan", "Pitching skills"}', '8 Weeks', '{"Business idea", "Commitment"}')
ON CONFLICT (id) DO NOTHING;

INSERT INTO testimonials (name, program, quote, image_url)
VALUES 
('Test Student', 'Vocational Training', 'The connection to Supabase is working perfectly!', 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=200&h=200&auto=format&fit=crop&face=true')
ON CONFLICT (id) DO NOTHING;



