import Joi from 'joi'
import { ISO27001AControls } from './ISO27001A.js'
import { LINDDUN, STRIDE } from './ThreatCategories.js'

export const RiskScenario = Joi.object({
  key: Joi.string().required(),
  scenario: Joi.string().required(),
  references: Joi.object({
    ISO27001A: Joi.array().items(ISO27001AControls.required()).required(),
    stride: Joi.array().items(STRIDE.required()).required(),
    linddun: Joi.array().items(LINDDUN.required()).required()
  }).required()
})

export const RiskScenarios = Joi.object({
  key: Joi.string().required(),
  name: Joi.string().required(),
  scope: Joi.string().required(),
  scenarios: Joi.array().items(RiskScenario.required()).required()
})
