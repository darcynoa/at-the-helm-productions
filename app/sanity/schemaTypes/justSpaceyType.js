import { defineField, defineType } from "sanity";

export const justSpaceyType = defineType({
  name: "justSpacey",
  title: "Just Spacey",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    // Hero Section
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({
          name: "heading",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "description",
          type: "text",
        }),
        defineField({
          name: "backgroundImage",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: "backgroundImageAltText",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "whatIsJustSpacey",
      title: "What is Just Spacey Section",
      type: "object",
      fields: [
        defineField({
          name: "headerInHeaderFont",
          type: "string",
        }),
        defineField({
          name: "headerInSpaceyFont",
          type: "string",
        }),
        defineField({
          name: "topCardText",
          type: "text",
        }),
        defineField({
          name: "topCardImage",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: "bottomCardText",
          type: "text",
        }),
        defineField({
          name: "bottomCardImage",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
    defineField({
      name: "sneakPeek",
      title: "Sneak Peek Section",
      type: "object",
      fields: [
        defineField({
          name: "header",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "trailerThumbnail",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: "trailerThumbnailAltText",
          type: "string",
        }),
        defineField({
          name: "trailerVimeoUrl",
          type: "url",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: "authenticLocations",
      title: "Authentic Locations & Props Section",
      type: "object",
      fields: [
        defineField({
          name: "headingLine1",
          type: "string",
        }),
        defineField({
          name: "headingLine2",
          type: "string",
        }),
        defineField({
          name: "petPassages",
          title: "Pet Passages Section",
          type: "object",
          fields: [
            defineField({
              name: "heading",
              type: "string",
            }),
            defineField({
              title: "Description",
              name: "description",
              description:
                "Use normal for the regular text and bold text to highlight the text that should be in handwriting font.",
              type: "array",
              of: [
                {
                  type: "block",
                },
              ],
            }),
            defineField({
              name: "backgroundImage",
              type: "image",
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: "linkToPetPassagesText",
              type: "string",
            }),
            defineField({
              name: "linkToPetPassagesUrl",
              type: "url",
            }),
          ],
        }),
        defineField({
          name: "anatomyOfDeathMuseum",
          title: "Anatomy of Death Museum Section",
          type: "object",
          fields: [
            defineField({
              name: "heading",
              type: "string",
            }),
            defineField({
              title: "Anatomy of Death Museum Description",
              name: "description",
              description:
                "Use normal for the regular text and bold text to highlight the text that should be in handwriting font.",
              type: "array",
              of: [
                {
                  type: "block",
                },
              ],
            }),
            defineField({
              name: "backgroundVideoUrl",
              type: "url",
            }),
            defineField({
              name: "linkToAnatomyOfDeathMuseumText",
              type: "string",
            }),
            defineField({
              name: "linkToAnatomyOfDeathMuseumUrl",
              type: "url",
            }),
          ],
        }),
      ],
    }),
  ],
});
