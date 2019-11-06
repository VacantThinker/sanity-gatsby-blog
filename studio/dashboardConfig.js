export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5dc34947b957e931314ca3b8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-64nzwyyq',
                  apiId: 'eaeec7a8-e379-4ed9-93a9-71dbcd8bc502'
                },
                {
                  buildHookId: '5dc3494724544438cf2f3caf',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-2e88ggyz',
                  apiId: 'c1a87f4a-f9f2-42ec-9f9e-34d2ed105404'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/VacantThinker/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-2e88ggyz.netlify.com', category: 'apps'}
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
