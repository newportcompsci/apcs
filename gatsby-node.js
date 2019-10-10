const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const lessonTemplate = path.resolve(`src/templates/lesson-template.js`)
  const unitTemplate = path.resolve(`src/templates/unit-template.js`)
  const generalTemplate = path.resolve(`src/templates/general-notes.js`)

  const result = await graphql(`
    {
      notes: allMdx(
        filter: { frontmatter: { path: { regex: "/^\/notes/" } }}
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
      units: allMdx(
        filter: { frontmatter: { path: { regex: "/unit-\\\\d+$/" } } }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
      lessons: allMdx(
        filter: {
          frontmatter: { path: { regex: "/unit-\\\\d+/lesson-\\\\d+$/" } }
        }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    console.log(result.errors)
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  let { units, lessons, notes } = result.data

  notes.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: generalTemplate, 
      context: {}
    })
  })

  units.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: unitTemplate,
      context: {
        lessonRegex: `${node.frontmatter.path}\\/lesson-\\\\d+$/`,
      },
    })
  })

  lessons.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: lessonTemplate,
      context: {},
    })
  })
}
