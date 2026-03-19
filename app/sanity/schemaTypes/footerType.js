import { defineField, defineType } from "sanity";

export const footerType = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "backToHomeText",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "copyrightText",
      type: "string",
    }),
  ],
});
