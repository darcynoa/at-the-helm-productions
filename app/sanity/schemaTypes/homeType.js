import {defineField, defineType} from 'sanity'

export const homeType = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading_line_1',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'heading_line_2',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'backgroundImage',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'scribbledOutText',
          title: 'Scribbled Out Text',
          type: 'string',
        }),
        defineField({
          name: 'swappedInText',
          title: 'Swapped In Text',
          type: 'string',
        }),
        defineField({
          name: 'cursiveText',
          title: 'Cursive Text',
          type: 'string',
        }),
      ],
    }),
    // Carousel Section
    defineField({
      name: 'carousel',
      title: 'Carousel Section',
      type: 'object',
      fields: [
        defineField({
          name: 'imageOne',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'imageTwo',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'imageThree',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'imageFour',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'imageFive',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'imageSix',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
    // Just Spacey section
    defineField({
      name: 'justSpacey',
      title: 'Just Spacey Section',
      type: 'object',
      fields: [
        defineField({
          name: 'subheading',
          type: 'string',
        }),
        defineField({
          name: 'heading',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'whatsAtTheHelm',
      title: "What's At The Helm",
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          type: 'string',
        }),
        defineField({
          name: 'description',
          type: 'text',
        }),
      ],
    }),
    defineField({
      name: 'whosRunningTheShip',
      title: "Who's Running The Ship",
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          type: 'string',
        }),
        defineField({
          name: 'subheading',
          type: 'string',
        }),
        defineField({
          name: 'listOfAttributes',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'attribute',
                  type: 'string',
                  required: true,
                }),
                defineField({
                  name: 'actualAttribute',
                  type: 'string',
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
})
