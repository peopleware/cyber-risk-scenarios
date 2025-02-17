import Joi from 'joi'
import { RiskScenarios } from '../schemata/RiskScenarios.js'
import { readYaml } from './readYaml.js'

/**
 * @typedef {object} Validation
 * @property {string} path
 * @property {object} [content]
 * @property {string[]} [errorDescription]
 */

export const Validation = Joi.object({
  path: Joi.string().required(),
  content: Joi.object().optional(),
  errorDescription: Joi.array().items(Joi.string().required()).optional()
}).required()

/**
 * @param {Object} content
 * @returns {Promise<Omit<Validation, 'path'>>}
 */
export async function validateScenarios(content) {
  const { value, error } = await RiskScenarios.validate(content, { abortEarly: false, convert: false })
  if (error) {
    return {
      content,
      errorDescription: error.details.map(d => `${d.path.join('.')}: ${d.message}`)
    }
  }
  return { content: value }
}

/**
 *
 * @param {string} path
 * @returns {Promise<Validation>}
 */
export async function validateScenariosFile(path) {
  const contents = await readYaml(path)
  const validation = await validateScenarios(contents)
  return { path, ...validation }
}
