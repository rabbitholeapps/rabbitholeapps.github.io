import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const link = z.object({
  label: z.string(),
  href: z.string(),
});

const shot = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string().optional(),
  placeholder: z.boolean().optional(),
  presentation: z.enum(['device', 'artwork']).optional(),
});

const apps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/apps' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string().optional(),
    status: z.enum(['Live', 'In development']),
    labels: z.array(z.string()).default([]),
    order: z.number(),
    problem: z.string(),
    solution: z.string(),
    highlights: z.array(z.string()).max(3),
    cta: link,
    extraLinks: z.array(link).default([]),
    tocLabels: z.record(z.string(), z.string()).default({}),
    crewCostComparison: z
      .object({
        radioOfficialCost: z.number(),
        crewSize: z.number(),
        proPlusAnnualCost: z.number(),
        optionalHeadsetCost: z.number(),
        defaultCrews: z.number().default(10),
        defaultYears: z.number().default(4),
      })
      .optional(),
    setup: z.string().optional(),
    github: z.string().url().optional(),
    logo: z.string(),
    screenshots: z.array(shot).default([]),
    screenshotGroups: z
      .array(
        z.object({
          heading: z.string(),
          id: z.string(),
          shots: z.array(shot),
        }),
      )
      .optional(),
  }),
});

const appDocs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/app-docs' }),
  schema: z.object({
    app: z.string(),
    page: z.string(),
    title: z.string(),
    description: z.string(),
    navLabel: z.string(),
    order: z.number(),
  }),
});

const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    navLabel: z.string(),
    order: z.number(),
  }),
});

export const collections = { apps, appDocs, legal };
