#!/usr/bin/env node

import { join } from 'node:path'
import { createReadStream } from 'node:fs'
import { createInterface } from 'node:readline'
import { writeFile } from 'node:fs/promises'
import { dump } from 'js-yaml'

const dirPath = join(import.meta.dirname, '..', 'scenarios')
const sourcePath = join(dirPath, 'TEMP.csv')
const targetPath = join(dirPath, 'TEMP.yaml')

const separator = ';'

function mapViolates(v) {
  const result = []
  if (v.includes('C')) {
    result.push('Confidentiality')
  }
  if (v.includes('I')) {
    result.push('Integrity')
  }
  if (v.includes('A')) {
    result.push('Availability')
  }
  if (v.includes('PP')) {
    result.push('Privacy')
  }
  return result
}

function mapSTRIDE(stride) {
  const result = []
  if (stride.includes('S')) {
    result.push('Spoofing')
  }
  if (stride.includes('T')) {
    result.push('Tampering')
  }
  if (stride.includes('R')) {
    result.push('Repudiation')
  }
  if (stride.includes('I')) {
    result.push('Information disclosure')
  }
  if (stride.includes('D')) {
    result.push('Denial of service')
  }
  if (stride.includes('E')) {
    result.push('Elevation of privilege')
  }
  return result
}

function mapLINDDUN(linddun) {
  const result = []
  if (linddun.includes('L')) {
    result.push('Linking')
  }
  if (linddun.includes('I')) {
    result.push('Identifying')
  }
  if (linddun.includes('N1')) {
    result.push('Non-repudiation')
  }
  if (linddun.includes('D1')) {
    result.push('Detecting')
  }
  if (linddun.includes('D2')) {
    result.push('Data Disclosure')
  }
  if (linddun.includes('U')) {
    result.push('Unawareness')
  }
  if (linddun.includes('N2')) {
    result.push('Non-compliance')
  }
  return result
}

async function csvToYaml() {
  const fileStream = createReadStream(sourcePath, { encoding: 'utf8' })

  const readLine = createInterface({
    input: fileStream,
    crlfDelay: Infinity
  })

  let key = 0
  const scenarios = []
  for await (const line of readLine) {
    key++
    const [ISO27001A, violates, stride, linddun, scenario] = line.split(separator)
    scenarios.push({
      key: `k${key}`,
      scenario,
      references: {
        violates: mapViolates(violates),
        ISO27001A: ISO27001A.split(',').map(i => i.trim()),
        stride: mapSTRIDE(stride),
        linddun: mapLINDDUN(linddun)
      }
    })

    const yamlScenarios = dump(scenarios)
    await writeFile(targetPath, yamlScenarios, 'utf8')
  }
}

await csvToYaml()
