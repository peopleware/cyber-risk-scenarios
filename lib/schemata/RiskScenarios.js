import Joi from 'joi'
import { ISO27001AControls } from './ISO27001A.js'
import { LINDDUN, STRIDE } from './ThreatCategories.js'
import { Violations } from './Violations.js'

/**
 * @typedef {object} TRiskScenarioReferences
 * @property {string[]} violates
 * @property {string[]} ISO27001A
 * @property {string[]} stride
 * @property {string[]} linddun
 */

/**
 * @typedef {object} TRiskScenario
 * @property {string} key
 * @property {string} scenario
 * @property {TRiskScenarioReferences} references
 */

export const RiskScenario = Joi.object({
  key: Joi.string().required(),
  scenario: Joi.string().required(),
  references: Joi.object({
    violates: Joi.array().items(Violations.required()).required(),
    ISO27001A: Joi.array().items(ISO27001AControls.required()).required(),
    stride: Joi.array().items(STRIDE.required()).required(),
    linddun: Joi.array().items(LINDDUN.required()).required()
  }).required()
})

/**
 * @typedef {object} TRiskScenarios
 * @property {string} key
 * @property {string} name
 * @property {string[]} [extends]
 * @property {string} scope
 * @property {TRiskScenario[]} scenarios
 */

export const RiskScenarios = Joi.object({
  key: Joi.string().required(),
  name: Joi.string().required(),
  extends: Joi.array()
    .items(
      Joi.string()
        .pattern(/^[A-Za-z0-9-./]+\.yaml$/)
        .required()
    )
    .optional(),
  scope: Joi.string().required(),
  scenarios: Joi.array().items(RiskScenario.required()).required()
})
