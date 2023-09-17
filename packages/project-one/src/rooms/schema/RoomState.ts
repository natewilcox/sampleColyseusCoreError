import { Schema, type } from "@colyseus/schema";
import { PlayerState } from "./PlayerState";

export class RoomState extends Schema {

    @type(PlayerState)
    player1: PlayerState;

    @type(PlayerState)
    player2: PlayerState;
}
