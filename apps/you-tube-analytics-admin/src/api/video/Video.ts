import { Analytics } from "../analytics/Analytics";
import { YouTubeChannel } from "../youTubeChannel/YouTubeChannel";

export type Video = {
  analyticsItems?: Array<Analytics>;
  createdAt: Date;
  description: string | null;
  id: string;
  title: string | null;
  updatedAt: Date;
  youtubeChannel?: YouTubeChannel | null;
};
