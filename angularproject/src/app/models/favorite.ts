import { Events } from "./events";

export interface Favorite {
    favoriteId?: number,
    userId: string,
    eventId: number,
    event?: Events
}
