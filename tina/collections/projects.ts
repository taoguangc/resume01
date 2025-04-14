import type { Collection } from 'tinacms';

const Projects: Collection = {
    label: 'Projects',
    name: 'projects',
    path: 'src/content/projects',
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true
        },
        {
            type: 'string',
            name: 'description',
            label: 'Description'
        },
        {
            type: 'datetime',
            name: 'publishDate',
            label: 'Publish Date',
            ui: {
                dateFormat: 'MMMM DD YYYY',
                timeFormat: 'hh:mm A'
            }
        },
        {
            type: 'rich-text',
            label: 'Body',
            name: 'body',
            isBody: true
        }
    ]
};

export default Projects;
