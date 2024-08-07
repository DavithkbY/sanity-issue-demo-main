import {defineField, defineType} from 'sanity'
import {MdSettings} from 'react-icons/md'
import {StarIcon} from '@sanity/icons'
import {FaBars} from 'react-icons/fa'

export default defineType({
  name: 'test',
  title: 'Document referencing document',
  type: 'document',
  icon: MdSettings,
  groups: [
    {
      name: 'main',
      title: 'Main Data',
      default: true,
      icon: StarIcon
    },
    {
      name: 'navigations',
      title: 'Navigations',
      icon: FaBars
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'main',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'headerNavigation',
      title: 'Header Navigation',
      type: 'reference',
      to: [{type: 'nieuwe'}],
      group: 'navigations',
      // options: {
      //   filter: ({parent, document}) => {
      //     return {
      //       filter: `language == $language`,
      //       params: {language: document.language}
      //     }
      //   },
      // },
    }),
  ],
})