import Joi from 'joi'

/**
 * @type {string[]}
 */
export const ViolationValues = ['Confidentiality', 'Integrity', 'Availability', 'Privacy']

/**
 * @type {Joi.StringSchema<string>}
 */
export const Violations = Joi.string().valid(...ViolationValues)
