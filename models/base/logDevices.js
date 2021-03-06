module.exports = class LogDevices {
    constructor(sysInfo = {}) {
        this.deviceId = sysInfo.deviceId || ''
        this.ip = sysInfo.ip || ''
        this.clientVersion = sysInfo.clientVersion || ''
        this.systemSoftware = sysInfo.systemSoftware || ''
        this.systemHardware = sysInfo.systemHardware || ''
        this.comOperation = sysInfo.comOperation || 0
        this.network = sysInfo.network || 0
        this.cpuHardware = sysInfo.cpuHardware || ''
        this.gpuHardware = sysInfo.gpuHardware || ''
        this.memory = sysInfo.memory || 0
        this.screenWidth = sysInfo.screenWidth || 0
        this.screenHeight = sysInfo.screenHeight || 0
        this.density = sysInfo.density || 0
        this.glRender = sysInfo.glRender || ''
        this.glVersion = sysInfo.glVersion || ''
        this.phoneNumber = sysInfo.phoneNumber || ''
    }

    toLogStr() {
        return this.deviceId + '|' + this.ip + '|' + this.clientVersion + '|' + this.systemSoftware + '|' + this.systemHardware + '|' + this.comOperation + '|' + this.network + '|' + this.cpuHardware + '|' + this.gpuHardware + '|' +
            this.memory + '|' + this.screenWidth + '|' + this.screenHeight + '|' + this.density + '|' + this.glRender + '|' + this.glVersion + '|' + this.phoneNumber
    }
}