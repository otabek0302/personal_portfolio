export default {
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Project Title',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Project Description',
    },
    {
      name: 'imageUrl',
      type: 'image',
      title: 'Project Main Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'images',
      type: 'array',
      title: 'Project Images',
      of: [{type: 'image'}],
    },
    {
      name: 'github',
      type: 'url',
      title: 'Project Code on GitHub',
    },
    {
      name: 'visitlink',
      type: 'url',
      title: 'Project Visit Link',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Project Category',
      options: {
        list: [
          {title: 'E-Commerce', value: 'eCommerce'},
          {title: 'Business', value: 'business'},
          {title: 'Blog website', value: 'blog'},
          {title: 'Portfolio website', value: 'portfolio'},
          {title: 'Informational website', value: 'informational'},
          {title: 'Startup website', value: 'startup'},
          {title: 'Consulting website', value: 'consulting'},
          {title: 'Booking website', value: 'booking'},
          {title: 'Landing page website', value: 'landingpage'},
        ],
      },
    },
    {
      name: 'tools',
      type: 'array',
      title: 'Tools are used Project',
      of: [{type: 'string'}],
    },
  ],
}
