const LogPlat = require('./LogPlat')
const config = require('../config')

module.exports = class LogAccountRole {
    constructor() {
        this.gameId = config.gameId
    }
}