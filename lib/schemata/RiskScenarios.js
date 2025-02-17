import { array, object, string } from 'joi'
import { ISO27001AControls } from './ISO27001A.js'
import { LINDDUN, STRIDE } from './ThreatCategories.js'

export const RiskScenario = object({
  key: string().required(),
  scenario: string().required(),
  references: object({
    ISO27001A: array().items(ISO27001AControls.required()).required(),
    stride: array().items(STRIDE.required()).required(),
    linddun: array().items(LINDDUN.required()).required()
  }).required()
})

export const RiskScenarios = object({
  key: string().required(),
  name: string().required(),
  scope: string().required(),
  scenarios: array().items(RiskScenario.required()).required()
})
