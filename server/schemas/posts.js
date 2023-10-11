export default {
  name: 'posts',
  type: 'document',
  title: 'Posts',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Post Name',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Post Description',
    },
    {
      name: 'imageUrl',
      type: 'image',
      title: 'Post Image',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Posts Images',
      of: [{type: 'image'}],
    },
  ],
}
