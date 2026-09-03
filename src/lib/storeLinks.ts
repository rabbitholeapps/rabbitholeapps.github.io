export type StoreKind = 'apple' | 'google';

export interface CtaLink {
  label: string;
  href: string;
}

export function storeKind(href: string): StoreKind | null {
  try {
    const { hostname } = new URL(href);
    if (hostname === 'apps.apple.com' || hostname === 'itunes.apple.com') return 'apple';
    if (hostname === 'play.google.com') return 'google';
  } catch {
    return null;
  }
  return null;
}

export function partitionCtas(links: CtaLink[]) {
  const store: { kind: StoreKind; href: string; label: string }[] = [];
  const rest: CtaLink[] = [];
  const seen = new Set<StoreKind>();

  for (const link of links) {
    const kind = storeKind(link.href);
    if (kind) {
      if (!seen.has(kind)) {
        seen.add(kind);
        store.push({ kind, href: link.href, label: link.label });
      }
      continue;
    }
    rest.push(link);
  }

  store.sort((a, b) => Number(a.kind !== 'apple') - Number(b.kind !== 'apple'));
  return { store, rest };
}

export function storeBadge(kind: StoreKind) {
  if (kind === 'apple') {
    return {
      src: 'images/stores/appstore.png',
      alt: 'Download on the App Store',
    };
  }
  return {
    src: 'images/stores/playstore.png',
    alt: 'Get it on Google Play',
  };
}
