const LogRole = require('./base/logRole')
const util = require('../utils')
const check = require('./check')

module.exports = class LogFriends extends LogRole {
    constructor(params = {}) {
        check.check('logFriends', params)
        super(params)
        this.oldFriendsNum = params.oldFriendsNum || 0
        this.newFriendsNum = params.newFriendsNum || 0
        this.addOrReduce = util.getChanged(this.newFriendsNum, this.oldFriendsNum)
        this.friendsNum = Math.abs(this.newFriendsNum - this.oldFriendsNum)
        this.type = params.type || 0
    }

    toLogStr() {
        return util.toLogStr('log_friends', super.toLogStr(),this.addOrReduce, this.oldFriendsNum, this.newFriendsNum, this.friendsNum, this.type)
    }
}