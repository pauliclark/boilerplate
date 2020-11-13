const envs = [
  'dev',
  'test',
  'staging',
  'production'
]
const environments = {}
envs.forEach(env => environments[env.toUpperCase()] = env)
export default environments