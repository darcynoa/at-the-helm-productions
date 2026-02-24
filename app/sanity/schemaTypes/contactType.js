import {defineField, defineType} from 'sanity'

export const contactType = defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'socials',
      title: 'Social Links and Contact Info',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              type: 'string',
              description: 'Name of the contact platform (e.g., Instagram, Email)',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'icon',
              type: 'image',
              description:
                'Icon representing the platform, must be 48x48 pixels and set to color #e5f1f2',
              options: {
                hotspot: true,
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'url',
              type: 'string',
              description: 'URL or email address for the contact platform',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'displayText',
              type: 'string',
              description: 'Text to display for the contact link',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'mobileWidthPercentage',
              type: 'number',
              description: 'Percentage width for the icon on mobile devices (e.g., 9 for 9%)',
              validation: (rule) =>
                rule.required().min(1).max(100).error('Must be between 1 and 100'),
            }),
          ],
        },
      ],
    }),
  ],
})
