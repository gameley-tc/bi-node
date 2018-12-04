const config = {
    game: 1,
    ip: "127.0.0.1",
    port: 8088,
    region: 1010001,
    channel: 1221212,
    init(option = {}) {
        Object.assign(this, option)
    }
}

module.exports = config