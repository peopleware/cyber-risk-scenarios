import { inspect } from 'node:util'
import { join } from 'node:path'
import { validateScenariosFile, Validation } from '../../lib/validate/validateScenarios.js'
import Joi from 'joi'
import { readYaml } from '../../lib/validate/readYaml.js'
import { fileExists } from '../../lib/validate/fileExists.js'

const aPathWhereAFileExists = join(import.meta.dirname, 'wrong.yaml')
const aPathWhereAFileDoesNotExists = join(import.meta.dirname, 'nothing-here')

describe('fileExists', function () {
  it('return true when there is a file at the given path', async function () {
    const result = await fileExists(aPathWhereAFileExists)
    result.should.be.true()
  })

  it('return false when there is not a file at the given path', async function () {
    const result = await fileExists(aPathWhereAFileDoesNotExists)
    result.should.be.false()
  })
})
