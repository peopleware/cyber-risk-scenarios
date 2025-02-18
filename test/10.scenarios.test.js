import { join, parse } from 'path'
import { validateScenariosFile } from '../lib/validate/validateScenarios.js'
import directoryTree from 'directory-tree'
import { fileExists } from '../lib/validate/fileExists.js'

const scenariosPath = join(import.meta.dirname, '..', 'scenarios')

/**
 * @param {string} path
 * @param {TRiskScenarios} riskScenarios
 * @returns {Promise<Awaited<boolean>[]>}
 */
async function extendsEntriesExist(path, riskScenarios) {
  if (!('extends' in riskScenarios)) {
    return true
  }

  return Promise.all(
    riskScenarios.extends.map(extendsPath => {
      const fullPath = join(path, extendsPath)
      return fileExists(fullPath)
    })
  )
}

function createTestsForScenariosFile(node) {
  const name = parse(node.path).name
  it(`\`${name}\` parses and is valid according to the Scenarios schema, and only extends files that exist`, async function () {
    const validation = await validateScenariosFile(node.path)
    if (validation.errorDescription) {
      validation.errorDescription.forEach(e => {
        console.error(`- ${e}`)
      })
    }
    validation.should.not.have.property('errorDescription')
    const extendsFilesExist = await extendsEntriesExist(validation.path, validation.content)
    extendsFilesExist.should.be.true()
  })
  // MUDO extends does not create cycles
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
