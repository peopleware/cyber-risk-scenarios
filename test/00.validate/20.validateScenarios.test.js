import { inspect } from 'node:util'
import { join } from 'node:path'
import { validateScenariosFile, Validation } from '../../lib/validate/validateScenarios.js'
import Joi from 'joi'
import { readYaml } from '../../lib/validate/readYaml.js'

const aYAMLPath = join(import.meta.dirname, '..', '..', 'scenarios', 'HTTP-JSON-Service.yaml')
const aWrongYAMLPath = join(import.meta.dirname, 'wrong.yaml')

describe('validateScenarios', function () {
  describe('validateScenariosFile', function () {
    it('validates an ok scenarios file', async function () {
      const result = await validateScenariosFile(aYAMLPath)
      console.log(inspect(result, { depth: 999 }))
      Joi.assert(result, Validation)
      result.path.should.equal(aYAMLPath)
      result.should.not.have.property('errorDescription')
      const scenariosFromFile = await readYaml(aYAMLPath)
      result.content.should.deepEqual(scenariosFromFile)
    })

    it('validates a wrong scenarios file', async function () {
      const result = await validateScenariosFile(aWrongYAMLPath)
      console.log(inspect(result, { depth: 999 }))
      Joi.assert(result, Validation)
      result.path.should.equal(aWrongYAMLPath)
      result.should.have.property('errorDescription')
      result.errorDescription.length.should.equal(7)
      const scenariosFromFile = await readYaml(aWrongYAMLPath)
      result.content.should.deepEqual(scenariosFromFile)
    })
  })
})
