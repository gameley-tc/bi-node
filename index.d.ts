declare module "@fitzix/bi-node" {
    // enums
    type SocketType = "udp4" | "udp6";

    interface biModel {
        toString(): string;
    }

    interface options {
        gameId: number;
        ip: string;
        port: number;
        region: number;
    }

    interface devices {
        deviceId: string;
        ip?: string;
        clientVersion?: string;
        systemSoftware?: string;
        systemHardware?: string;
        comOperation?: 1 | 2 | 3 | 4;
        network?: 1 | 2 | 3 | 4;
        cpuHardware?: string;
        gpuHardware?: string;
        memory?: number;
        screenWidth?: number;
        screenHeight?: number;
        density?: number;
        glRender?: string;
        glVersion?: string;
        phoneNumber?: string;
    }




    function init(option: options): void;
    function send(bimodel: biModel): void;

    // models

    interface logActionParams {
        uuid: string;
        uid: string;
        type: 0 | 1;
        actionType: number;
        actionNumber: number;
        g1?: number;
        g2?: number;
        g3?: number;
        g4?: number;
        g5?: number;
        g6?: number;
        s1?: string;
        s2?: string;
        s3?: string;
        s4?: string;
        s5?: string;
        s6?: string;
    }

    class logAction implements biModel {
        constructor(params: logActionParams, devices: devices);
        toString(): string;
    }
}