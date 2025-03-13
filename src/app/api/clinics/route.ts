import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  console.log('API Route: Starting clinics fetch');
  try {
    console.log('API Route: Attempting Supabase query');
    const { data, error } = await supabase
      .from('clinics')
      .select('*')
      .order('name');

    console.log('API Route: Supabase response:', { data, error });

    if (error) {
      console.error('API Route: Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!data) {
      console.log('API Route: No data returned from Supabase');
      return NextResponse.json({ error: 'No data found' }, { status: 404 });
    }

    console.log('API Route: Successfully fetched clinics:', data.length);
    return NextResponse.json(data);
  } catch (error) {
    console.error('API Route: Unexpected error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
} 