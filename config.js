const config = {
    gameId: 1,
    ip: "127.0.0.1",
    port: 8088,
    region: 1010001,
    init(option = {}) {
        Object.assign(this, option)
    }
}

module.exports = config