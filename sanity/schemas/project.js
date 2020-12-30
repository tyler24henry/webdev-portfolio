import { FaHotdog as icon } from 'react-icons/fa';

export default {
    name: 'project',
    title: 'Projects',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Project name',
            type: 'string',
        },
        {
            name: 'status',
            title: 'Status',
            type: 'string',
            description: 'You done yet? You finished? You done yet?',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: `What's the big idea? What's this all about?`,
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'projectImage' }]}],
            description: 'Images that show your superb work',
        },
        {
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'technology' }]}],
            description: 'Technologies you used to make this project',
        },
        {
            name: 'githubLink',
            title: 'Github Link',
            type: 'string',
            description: 'Github URL to this project',
        },
        {
            name: 'websiteLink',
            title: 'Website link',
            type: 'string',
        },
    ],
    preview: {
        select: {
            title: 'name',
            status: 'status',
            media: 'images.0.image',
        },
        prepare: ({ title, status, media }) => {
            return {
                title,
                media,
                subtitle: status,
            }
        }
    }
}