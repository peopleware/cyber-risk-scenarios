import { inspect } from 'node:util'
import { join } from 'node:path'
import { readYaml } from '../../lib/validate/readYaml.js'

const aYAMLPath = join(import.meta.dirname, '..', '..', 'scenarios', 'HTTP-JSON-Service.yaml')

describe('readYaml', function () {
  it('reads a YAML file', async function () {
    const result = await readYaml(aYAMLPath)
    console.log(inspect(result, { depth: 999 }))
    result.should.be.an.Object()
  })
})
