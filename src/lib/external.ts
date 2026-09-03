/** True for http(s) URLs — open these in a new tab. */
export function isExternalHref(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

export function externalAttrs(href: string) {
  if (!isExternalHref(href)) return {};
  return { target: '_blank', rel: 'noopener noreferrer' } as const;
}
