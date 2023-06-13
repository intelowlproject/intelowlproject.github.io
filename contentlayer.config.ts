import { defineDocumentType, makeSource } from '@contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/blogs/${post._raw.flattenedPath}` },
  },
}))

export default makeSource({ contentDirPath: 'blogs', documentTypes: [Post] })
