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
                  buildHookId: '62f9b77a10051660ad2f4ce1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ff9ev15k',
                  apiId: '42d3af93-c612-4359-8c6c-f27faa051490'
                },
                {
                  buildHookId: '62f9b77bfc1ab26c46a08ef8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-thyv93z2',
                  apiId: 'da37d1c0-1cda-46a4-80fe-a1fe35e89bd9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vagarwal1968/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-thyv93z2.netlify.app',
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
