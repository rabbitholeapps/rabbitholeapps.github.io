/** GitHub-style slug for heading ids and in-page TOC links. */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/['’]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '');
}

export function markdownH2s(body: string): { id: string; label: string }[] {
  const items: { id: string; label: string }[] = [];
  for (const match of body.matchAll(/^##[ \t]+(.+)$/gm)) {
    const label = match[1].replace(/[*_`]/g, '').trim();
    if (!label) continue;
    items.push({ id: slugify(label), label });
  }
  return items;
}
