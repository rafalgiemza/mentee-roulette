import { type UserResponse as IUserResponse } from "./users";

export interface RouletteTriggerResponse {
  readonly event: Event;
  readonly participants: IUserResponse[];
}

export interface Event {
  readonly summary: string;
  readonly description: string;
  readonly start: string;
  readonly end: string;
}
