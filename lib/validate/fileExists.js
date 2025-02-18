import { access } from 'node:fs/promises'

/**
 * @param {string} path
 * @return {Promise<boolean>}
 */
export async function fileExists(path) {
  try {
    await access(path)
    return true
  } catch (err) {
    if (err.code === 'ENOENT') {
      return false
    }
    throw err
  }
}
