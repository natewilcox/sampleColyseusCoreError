import { Room, Client } from "@colyseus/core";
import { RoomState } from "./schema/RoomState";
import { Dispatcher } from "@colyseus/command";

export class PublicRoom extends Room<RoomState> {
  
    maxClients = 2;
    dispatcher: Dispatcher<PublicRoom> = new Dispatcher(this);

    onCreate (options: any) {
    }

    onJoin (client: Client, options: any) {
    }

    async onLeave (client: Client, consented: boolean) {
    }

    onDispose() {
    }
}
