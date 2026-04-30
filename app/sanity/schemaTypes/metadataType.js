import { defineField, defineType } from "sanity";

export const metadataType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  description:
    "This is where you can set the title and description of your website, which will be used in the head section of your HTML document for SEO purposes.",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "siteTitle",
      title: "Site Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "siteDescription",
      title: "Site Description",
      type: "text",
    }),
    defineField({
      name: "favicon",
      title: "Favicon",
      description:
        "Must be a PNG, and ideally 48x48. Sizes that work include 16x16, 32x32, 48x48, and 64x64.",
      type: "image",
    }),
  ],
});
