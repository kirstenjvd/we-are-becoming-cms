export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5ea5dbf04c181e83ff2d52e3',
                  title: 'Sanity Studio',
                  name: 'we-are-becoming-cms-studio',
                  apiId: 'fe3c7a21-faa5-493f-a196-c49cdb81f8aa'
                },
                {
                  buildHookId: '5ea5dbf0d4cde2e09069cc3c',
                  title: 'Portfolio Website',
                  name: 'we-are-becoming-cms',
                  apiId: '1763a4b2-4808-41d1-aa5a-ed4410e4b348'
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
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
