import app, { ready } from '../apps/api/src/index.js'

export default async function handler(req, res) {
  await ready
  return app(req, res)
}