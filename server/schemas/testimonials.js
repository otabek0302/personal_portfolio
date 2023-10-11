export default {
  name: 'testimonials',
  type: 'document',
  title: 'Testimonials',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'status',
      type: 'string',
      title: 'Status',
    },
    {
      name: 'imageurl',
      type: 'image',
      title: 'ImgUrl',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'feedback',
      type: 'string',
      title: 'Feedback',
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
      validation: (Rule) => Rule.required().min(0).max(5),
    },
  ],
}
