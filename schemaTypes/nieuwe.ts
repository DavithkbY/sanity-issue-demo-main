import {defineField, defineType} from 'sanity'
import {MdSettings} from 'react-icons/md'
export default defineType({
  name: 'nieuwe',
  title: 'Nieuwe',
  type: 'document',
  icon: MdSettings,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
  ],
})