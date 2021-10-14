const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve('./src/templates/blog-post.js')
  const practiceAreaPage = path.resolve('./src/templates/practice-area-detail.js')
  const guidePage = path.resolve('./src/templates/guides.js')
  const result = await graphql(
    `
      {
        allContentfulBlogPost {
          nodes {
            title
            slug
          }
        }
      }
    `
  )
  const practiceAreas = await graphql(
    `
    {
      allContentfulPracticeAreas(sort: {fields: practiceAreaId, order: ASC}) 
      {
        nodes 
        {
          practiceAreaId
          name
          slug
          description 
          {
            description
          }
        }
      }
    }
`)
  const guides = await graphql(
    `
    {
        allContentfulGuides {
    nodes {
      
        heroImage {
          description
          gatsbyImageData
          title
        }
        practiceArea {
          practiceAreaId
        }
        title
        body {
          id
          body
        }
        slug
      }
    }
    }
`
  )

  if (result.errors || practiceAreas.errors || guides.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }


  const posts = result.data.allContentfulBlogPost.nodes
  const practiceAreasResults = practiceAreas.data.allContentfulPracticeAreas.nodes
  const guidesResults = guides.data.allContentfulGuides.nodes

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostSlug = index === 0 ? null : posts[index - 1].slug
      const nextPostSlug =
        index === posts.length - 1 ? null : posts[index + 1].slug

      createPage({
        path: `/blog/${post.slug}/`,
        component: blogPost,
        context: {
          slug: post.slug,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
  }
  if (practiceAreasResults.length > 0) {
    practiceAreasResults.forEach((practiceAreasResults, index) => {

      createPage({
        path: `/practice-areas/${practiceAreasResults.slug}/`,
        component: practiceAreaPage,
        context: {
          slug: practiceAreasResults.slug,
          practiceAreaId: practiceAreasResults.practiceAreaId,

        },
      })
    })
  }
  if (guidesResults.length > 0) {
    guidesResults.forEach((guidesResults, index) => {
    console.log(guidesResults)
      createPage({
        path: `/guides/${guidesResults.slug}/`,
        component: guidePage,
        context: {
          slug: guidesResults.slug,

        },
      })
    })
  }
}
