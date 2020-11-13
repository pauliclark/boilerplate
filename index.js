import eez, { routing, response, errors } from 'eez'
import environments from './constants/environments.js'
const { success } = response

const init = async ({
  port=3080,
  env= environments.DEV,
  afterListen = () => {}
} = {}) => {

  // Ensure the environment is valid
  if (!(Object.values(environments).includes(env))) throw new Error(`${env} is not a valid boilerplate environment {available = [${Object.values(environments).join(', ')}]}`)

  // Start eez
  await eez({
    port: 3080,
    afterListen
  })
  // routing.get('/', (req, res) => {
  //   success(res, 'root path')
  // })
  // routing.get('/test', (req, res) => {
  //   success(res, 'test path')
  // })
}
export {routing, response, errors, environments}
export default init
