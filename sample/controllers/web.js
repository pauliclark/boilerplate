import { routing, response, errors } from 'eez'
const {get} = routing
import home from './web/home.js'
import test from './web/test.js'

export default async() => {
  get('/', home)
  get('/:test', test)
  // get('/:test', (req,res) => {
  //   console.log(req.params)
  // })
}