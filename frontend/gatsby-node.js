
const {createRemoteFileNode} = require('gatsby-source-filesystem');

exports.createResolvers = async ({
  actions, 
  cache, 
  createNodeId,
  createResolvers, 
  store, 
  reporter, 

}) => {
  const {createNode} = actions

  await createResolvers({
    potato_UploadFile: {
      imageFile: {
        type: 'File',
        async resolve(source) {
          let sourceUrl = 'localhost:1337'
          return await createRemoteFileNode({
            url: sourceUrl,
            store,
            cache,
            createNode,
            createNodeId,
            reporter
          })
        }
      }
    }
  })
}

exports.onCreateWebpackConfig = ({
    actions,
    plugins,
    stage
  }) => {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          path: require.resolve("path-browserify")
        },
        fallback: {
          fs: false,
        }
      }
    })
    if (stage === 'build-javascript' || stage === 'develop') {
      actions.setWebpackConfig({
        plugins: [
          plugins.provide({ process: 'process/browser' })
        ]
      })
    }
  } 