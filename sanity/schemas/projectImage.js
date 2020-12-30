import { AiFillCamera as icon } from 'react-icons/ai';

export default {
    name: 'projectImage',
    title: 'Project Image',
    type: 'document',
    icon,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'image',
            title: 'The actual image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
        },
        prepare: ({ title, media }) => {
            return {
                title, media
            }
        }
    }
}