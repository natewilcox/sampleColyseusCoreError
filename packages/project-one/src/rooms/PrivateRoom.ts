import { Room, Client } from "@colyseus/core";
import { RoomState } from "./schema/RoomState";
import { Dispatcher } from "@colyseus/command";

export class PrivateRoom extends Room<RoomState> {
  
    maxClients = 2;
    dispatcher: Dispatcher<PrivateRoom> = new Dispatcher(this);

    onCreate (options: any) {


    }

    onJoin (client: Client, options: any) {

    }

    async onLeave (client: Client, consented: boolean) {

    }

    onDispose() {
    }
}
