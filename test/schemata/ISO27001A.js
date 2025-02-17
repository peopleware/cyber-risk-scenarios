import { string } from 'joi'

/**
 * @param {string} n
 * @param {number} m
 * @returns {string[]}
 */
function buildValues(n, m) {
  return [...Array(m).keys()].map(n0 => `${n}.${n0 + 1}`)
}

/**
 * @param {string} n
 * @param {number} m
 * @return {{values: string[], schema: Joi.StringSchema<string>}}
 */
function buildValuesAndSchema(n, m) {
  const values = buildValues(n, m)
  const schema = string().valid(...ISO27001A5OrganizationalControlsValues)
  return { values, schema }
}

export const { values: ISO27001A5OrganizationalControlsValues, schema: ISO27001A5OrganizationalControls } =
  buildValuesAndSchema('5', 37)
export const { values: ISO27001A6PeopleControlsValues, schema: ISO27001A6PeopleControls } = buildValuesAndSchema('6', 8)
export const { values: ISO27001A7PhysicalControlsValues, schema: ISO27001A7PhysicalControls } = buildValuesAndSchema(
  '7',
  14
)
export const { values: ISO27001A8TechnologicalControlsValues, schema: ISO27001A8TechnologicalControls } =
  buildValuesAndSchema('8', 34)

export const ISO27001AControlsValues = ISO27001A5OrganizationalControlsValues.concat(ISO27001A6PeopleControlsValues)
  .concat(ISO27001A7PhysicalControlsValues)
  .concat(ISO27001A8TechnologicalControlsValues)
export const ISO27001AControls = string().valid(...ISO27001AControlsValues)
