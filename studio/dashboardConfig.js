export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60e3ff44602b68899defdf91',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-e3huoppq',
                  apiId: 'c0e293dc-0952-4e6a-8fca-5bb901fcc728'
                },
                {
                  buildHookId: '60e3ff44ae1c694b6c225e79',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ae3mfqbm',
                  apiId: '4e68935a-7584-4e8d-ab95-c322ec40d678'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DesignMonkey/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ae3mfqbm.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
