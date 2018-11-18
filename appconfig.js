const path = require('path')

const APP_ROOT = process.cwd()
const APP_PORT = 8080

const BUILD_FOLDER = 'build'
const SRC_FOLDER = 'src'
const NODE_MODULES = 'node_modules'

const DIRS = {
  build: path.join(APP_ROOT, BUILD_FOLDER),
  nodeModules: path.join(APP_ROOT, NODE_MODULES),
  root: APP_ROOT,
  src: path.join(APP_ROOT, SRC_FOLDER)
}

exports.DIRS = DIRS
exports.APP_PORT = APP_PORT
