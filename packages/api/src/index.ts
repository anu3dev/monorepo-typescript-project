import './types';

export async function apiFetch<T = unknown>(
  path: string,
  opts: RequestInit = {}
) {
  const base = import.meta.env?.VITE_API_BASE ?? '';
  const token =
    typeof window !== 'undefined'
      ? sessionStorage.getItem('accessToken')
      : null;
  const headers: Record<string, string> = {
    ...((opts.headers as Record<string, string>) || {}),
    'Content-Type': 'application/json',
  };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const res = await fetch(`${base}${path}`, { ...opts, headers });
  if (!res.ok) throw new Error(await res.text().catch(() => res.statusText));
  return (await res.json()) as T;
}

export async function login(username: string, password: string) {
  const res = await fetch(import.meta.env?.VITE_API_BASE + '/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) throw new Error('Login failed');
  const data = await res.json();
  if (data?.accessToken)
    sessionStorage.setItem('accessToken', data.accessToken);
  return data;
}
