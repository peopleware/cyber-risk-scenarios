import { readFile } from 'node:fs/promises'
import { load } from 'js-yaml'

/**
 * @param {string} path
 * @return {Promise<string>}
 */
export async function readYaml(path) {
  const contents = await readFile(path, 'utf-8')
  return load(contents, {
    filename: path
  })
}
