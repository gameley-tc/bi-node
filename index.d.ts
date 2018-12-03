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

    function init(option: options): void;
    function send(): void;
}