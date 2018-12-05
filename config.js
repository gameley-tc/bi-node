const config = {
    game: 1,
    ip: "127.0.0.1",
    port: 8888,
    region: 1010001,
    channel: 2006603,
    init(option = {}) {
        Object.assign(this, option)
    }
}

module.exports = config