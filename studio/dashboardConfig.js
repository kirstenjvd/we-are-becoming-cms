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
                  buildHookId: '5fb418c9fe6e5d01160c923f',
                  title: 'Sanity Studio',
                  name: 'wearebecoming',
                  apiId: 'b05f8dcd-5180-433c-b2b0-447f6c31220c'
                },
                {
                  buildHookId: '5ed994c77f8e20b891d9da47',
                  title: 'Portfolio Website',
                  name: 'we-are-becoming',
                  apiId: '6e631844-cdc7-437d-a739-950cdd18769c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kirstenjvd/we-are-becoming-cms',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://we-are-becoming-cms.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['services']},
      layout: {width: 'medium'}
    }
  ]
}
