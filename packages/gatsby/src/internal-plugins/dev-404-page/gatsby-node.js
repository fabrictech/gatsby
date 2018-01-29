const path = require(`path`)
const fs = require(`fs-extra`)

let createdPage = false

exports.createPages = async ({ store, boundActionCreators }) => {
  if (process.env.NODE_ENV !== `production`) {
    const { program } = store.getState()
    const { createPage } = boundActionCreators
    const currentPath = path.join(__dirname, `./raw_dev-404-page.js`)
    const newPath = path.join(program.directory, `.cache`, `dev-404-page.js`)

    if (!createdPage) {
      createdPage = true

      await fs.copy(currentPath, newPath)

      createPage({
        component: newPath,
        path: `/dev-404-page/`,
      })
    }
  }
}
