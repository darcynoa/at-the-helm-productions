import { defineField, defineType } from "sanity";

export const navigationType = defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "links",
      type: "array",
      of: [
        defineField({
          type: "object",
          fields: [
            defineField({
              name: "label",
              type: "string",
            }),
            defineField({
              name: "slug",
              type: "string",
            }),
            defineField({
              name: "color",
              type: "string",
              options: {
                list: [
                  { title: "White", value: "white" },
                  { title: "Blue", value: "blue" },
                  { title: "Cyan", value: "cyan" },
                  { title: "Pink", value: "pink" },
                ],
              },
            }),
          ],
        }),
      ],
    }),
  ],
});
