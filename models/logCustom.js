const LogRole = require('./base/logRole')

module.exports = class LogCustom extends LogRole {
    constructor(params = {}) {
        super(params)
    }
}