/** Prefix a site-root path with Astro's `base` (stays correct if `base` is ever not `/`). */
export function withBase(path = ''): string {
  const base = import.meta.env.BASE_URL;
  if (!path || path === '/') return base;
  const cleaned = path.replace(/^\//, '');
  return `${base}${cleaned}`;
}
