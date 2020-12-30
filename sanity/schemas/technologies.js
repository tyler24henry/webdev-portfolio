import { GiCardJoker as icon } from 'react-icons/gi';

export default {
    name: 'technology',
    title: 'Technology',
    type: 'document',
    icon,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare: ({ title }) => {
            return {
                title
            }
        }
    }
}