// STRIDE

import { string } from 'joi'
import { ISO27001A5OrganizationalControlsValues } from './ISO27001A.js'

/**
 * @type {string[]}
 */
export const STRIDEValues = [
  'Spoofing',
  'Tampering',
  'Repudiation',
  'Information disclosure',
  'Denial of service',
  'Elevation of privilege'
]

/**
 * @type {Joi.StringSchema<string>}
 */
const STRIDE = string().valid(...STRIDEValues)

// LINDDUN

/**
 * @type {string[]}
 */
export const LINDDUNValues = [
  'Linking',
  'Identifying',
  'Non-repudiation',
  'Detecting',
  'Data Disclosure',
  'Unawareness',
  'Non-compliance'
]

/**
 * @type {Joi.StringSchema<string>}
 */
const LINDDUN = string().valid(...LINDDUNValues)

/**
 * @type {string[]}
 */
export const threatCategoriesValues = STRIDEValues.concat(LINDDUNValues)

/**
 * @type {Joi.StringSchema<string>}
 */
export const ThreatCategories = string().valid(...threatCategoriesValues)
