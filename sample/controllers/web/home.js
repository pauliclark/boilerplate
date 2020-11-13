import {response} from 'eez'
const {success} = response
export default (req,res) => {
  
  success(res,'home')
}