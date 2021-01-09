export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5ff9caca1e18094f4b40ea37',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-ou47cwu2',
                  apiId: '8e5885a0-0083-4250-ae71-6151cd3e86d9'
                },
                {
                  buildHookId: '5ff9caca2b73fc46f5916253',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-19s429je',
                  apiId: '1cb82c21-3f54-4e5f-89a7-a8fbb4ea8c3b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tjjjia/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-19s429je.netlify.app', category: 'apps'}
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
