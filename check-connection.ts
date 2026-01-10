import { supabase } from './lib/supabase';

async function testConnection() {
  console.log('--- Supabase Connection Test ---');
  
  // 1. Check if variables are loaded (Vite uses import.meta.env which won't work in raw node, 
  // but we can check the initialized client)
  console.log('Checking Supabase client initialization...');
  
  try {
    const { data, error } = await supabase.from('programs').select('count', { count: 'exact', head: true });
    
    if (error) {
      if (error.code === 'PGRST116') {
        console.log('✅ Connection successful, but the "programs" table is empty or RLS is blocking access.');
      } else {
        console.error('❌ Connection failed:', error.message);
      }
    } else {
      console.log(`✅ Connection successful! Found ${data || 0} programs in the database.`);
    }
  } catch (err) {
    console.error('❌ An unexpected error occurred during connection test:', err);
  }
}

testConnection();



