import { JsonValue } from "type-fest";
import { Subscription } from "../subscription/Subscription";
import { YouTubeChannel } from "../youTubeChannel/YouTubeChannel";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  subscriptions?: Array<Subscription>;
  updatedAt: Date;
  username: string;
  youTubeChannels?: Array<YouTubeChannel>;
};
