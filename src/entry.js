if (process.version > 'v6') {
  module.exports = require('./index');
} else {
  module.exports = require('../distribution/src/index');
}
