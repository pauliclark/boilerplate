import {response} from 'eez'
const {success} = response
export default (req,res) => {
  console.log(req.params)
  success(res,req.params)
}