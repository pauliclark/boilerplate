import eez, { getApp, getServer, routing, response, errors, identifiers } from 'eez'
import environments from './constants/environments.js'
const { success } = response

const init = async ({
  port=identifiers.autoPort,
  env= environments.DEV,
  logger,
  afterListen = () => {}
} = {}) => {

  // Ensure the environment is valid
  if (!(Object.values(environments).includes(env))) throw new Error(`${env} is not a valid boilerplate environment {available = [${Object.values(environments).join(', ')}]}`)

  // Start eez
  await eez({
    port,
    logger,
    afterListen
  })
}
export {routing, response, errors, environments, identifiers, getApp, getServer}
export default init
