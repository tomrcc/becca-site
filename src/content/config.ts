import { defineCollection, z } from "astro:content";

const seoSchema = z
  .object({
    page_description: z.string().nullable(),
    canonical_url: z.string().nullable(),
    featured_image: z.string().nullable(),
    featured_image_alt: z.string().nullable(),
    author_twitter_handle: z.string().nullable(),
    open_graph_type: z.string().nullable(),
    no_index: z.boolean(),
  })
  .optional();

const pageSchema = z.object({
  title: z.string().nullable(),
  content_blocks: z.array(z.any()),
  seo: seoSchema,
});


const pagesCollection = defineCollection({
  schema: pageSchema,
});

export const collections = {
  pages: pagesCollection,
};
