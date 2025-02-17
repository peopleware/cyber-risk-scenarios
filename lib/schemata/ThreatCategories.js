import { string } from 'joi'

// STRIDE

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
export const STRIDE = string().valid(...STRIDEValues)

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
export const LINDDUN = string().valid(...LINDDUNValues)
