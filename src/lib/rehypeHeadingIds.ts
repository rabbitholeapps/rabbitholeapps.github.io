import { slugify } from './slug';

type HastNode = {
  type: string;
  tagName?: string;
  value?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
};

function textContent(node: HastNode): string {
  if (node.type === 'text') return node.value ?? '';
  if (!node.children?.length) return '';
  return node.children.map(textContent).join('');
}

function visit(node: HastNode) {
  if (node.type === 'element' && node.tagName && /^h[1-6]$/.test(node.tagName)) {
    node.properties ??= {};
    if (!node.properties.id) {
      node.properties.id = slugify(textContent(node));
    }
  }
  node.children?.forEach(visit);
}

/** Add `id` attributes to markdown headings so in-page TOC links resolve. */
export function rehypeHeadingIds() {
  return (tree: HastNode) => {
    visit(tree);
  };
}
