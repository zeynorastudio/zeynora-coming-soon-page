import { createClient, SupabaseClient } from '@supabase/supabase-js'

let supabaseClient: SupabaseClient | null = null

function getClient(): SupabaseClient {
  if (supabaseClient) {
    return supabaseClient
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env.local file.')
  }

  supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
  return supabaseClient
}

// Export a proxy that lazily initializes the client
export const supabase = new Proxy({} as SupabaseClient, {
  get(_target, prop, receiver) {
    const client = getClient()
    const value = Reflect.get(client, prop, receiver)
    
    // Bind functions to preserve 'this' context
    if (typeof value === 'function') {
      return value.bind(client)
    }
    
    return value
  },
  has(_target, prop) {
    const client = getClient()
    return Reflect.has(client, prop)
  },
  ownKeys(_target) {
    const client = getClient()
    return Reflect.ownKeys(client)
  },
  getOwnPropertyDescriptor(_target, prop) {
    const client = getClient()
    return Reflect.getOwnPropertyDescriptor(client, prop)
  }
})

