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
                  buildHookId: '5e7b2392bb4b686ed043eff5',
                  title: 'Sanity Studio',
                  name: 'Fagprat-mars-2020-studio',
                  apiId: '202d469e-a1f9-4322-8ab6-c8347fae4cb8'
                },
                {
                  buildHookId: '5e7b2392cc1cad2097143e74',
                  title: 'Portfolio Website',
                  name: 'Fagprat-mars-2020',
                  apiId: '42b95b48-93d4-4e77-85ef-1e30da63bcd4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mmoverla/Fagprat-mars-2020',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://Fagprat-mars-2020.netlify.com',
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
