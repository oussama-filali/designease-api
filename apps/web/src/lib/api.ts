// Type definition reflecting the backend DTO
export interface Template {
  id: string
  title: string
  slug: string
  description: string
  price: string
  isFree: boolean
  thumbnailUrl: string
  previewUrl?: string
  technologies: string[]
  category?: {
    name: string
    slug: string
  }
}

const baseUrl =
  process.env.NEXT_PUBLIC_API_URL || 
  process.env.API_URL || 
  'http://localhost:3001'; // On remplace "127.0.0.1" par "localhost"

export async function getTemplate(slug: string): Promise<Template> {
  const res = await fetch(`${baseUrl}/templates/${slug}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    if (res.status === 404) return null as any;
    // Tenter de lire le corps de la réponse pour le log avant de throw
    const errorBody = await res.text().catch(() => 'No error body');
    console.error(`Fetch error ${res.status} for ${slug}:`, errorBody);
    throw new Error(`Failed to fetch template: ${res.status}`);
  }

  // Vérifier si la réponse a du contenu avant de parser
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

// Fetcher function (Server Component compatible)
export async function getTemplates(): Promise<Template[]> {
  const res = await fetch(`${baseUrl}/templates`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch templates');
  }

  return res.json();
}

export async function login(credentials: { email: string; password: string }) {
  const res = await fetch(`${baseUrl}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  
  if (!res.ok) throw new Error('Login failed');
  return res.json();
}

export async function register(data: { email: string; password: string; fullName: string }) {
  const res = await fetch(`${baseUrl}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error('Registration failed');
  return res.json();
}
