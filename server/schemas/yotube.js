export default {
  name: 'youtube',
  type: 'document',
  title: 'YouTube Embed',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'YouTube video Title',
    },
    {
      name: 'description',
      type: 'string',
      title: 'YouTube video Description',
    },
    {
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
    },
  ],
}
