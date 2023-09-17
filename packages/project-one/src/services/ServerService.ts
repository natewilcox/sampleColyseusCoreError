import * as Colyseus from "colyseus.js";
import { RoomState } from "../rooms/schema/RoomState";

export class ServerService {

    private serverUrl: string;
    private room: Colyseus.Room<RoomState>;
    private client: Colyseus.Client;
    private serverHandlers = new Map<number, (data: any) => void>();
    private reconnectionToken: string;
    private isTryingToReconnect = false;

    constructor(serverUrl: string) {
        this.client = new Colyseus.Client(serverUrl);
        this.serverUrl = serverUrl;
    }

    static Test() {
        console.log('ehh')
    }
    get SessionID() {
        return this.room.sessionId;
    }

    get RoomId() {
        return this.room.roomId;
    }

    get isConnected() {
        return this.room.connection.isOpen;
    }

    get canReconnect() {
        return this.reconnectionToken != null;
    }

    get state() {
        return this.room.state;
    }

    async connect(roomName: string, options?: any) {


    }

    async reconnect() {

       
    }

    disconnect() {
    }

    async leave() {
    }

    private configureRoomListeners(room: Colyseus.Room) {

    }
    
    async listenAndReconnect() {

    }
}