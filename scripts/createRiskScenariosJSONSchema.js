#!/usr/bin/env node

import parse from 'joi-to-json'
import { join } from 'node:path'
import { writeJsonFile } from 'write-json-file'
import { RiskScenarios } from '../lib/schemata/RiskScenarios.js'

const jsonSchemataDir = join(import.meta.dirname, '..', '.JSONSchemata')

async function createRiskScenariosJSONSchema() {
  const result = parse(RiskScenarios)
  const path = join(jsonSchemataDir, 'RiskScenarios.json')
  return writeJsonFile(path, result, { indent: 2 })
}

await createRiskScenariosJSONSchema()
