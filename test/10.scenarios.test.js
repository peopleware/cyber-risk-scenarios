import { join, parse } from 'path'
import { validateScenariosFile } from '../lib/validate/validateScenarios.js'
import directoryTree from 'directory-tree'

const scenariosPath = join(import.meta.dirname, '..', 'scenarios')

function createTestsForScenariosFile(node) {
  const name = parse(node.path).name
  it(`\`${name}\` parses and is valid according to the Scenarios schema`, async function () {
    const validation = await validateScenariosFile(node.path)
    if (validation.errorDescription) {
      validation.errorDescription.forEach(e => {
        console.error(`- ${e}`)
      })
    }
    validation.should.not.have.property('errorDescription')
  })
}

/**
 * @param nodeList
 */
function createTestsForNodeList(nodeList) {
  nodeList.forEach(n => {
    if (n.children) {
      describe(n.name, function () {
        createTestsForNodeList(n.children, n.name)
      })
    } else {
      createTestsForScenariosFile(n)
    }
  })
}

describe('scenarios', function () {
  const tree = directoryTree(scenariosPath, { extensions: /\.yaml/ })
  createTestsForNodeList(tree.children)
})
