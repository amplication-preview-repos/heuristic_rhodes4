import { YouTubeChannel as TYouTubeChannel } from "../api/youTubeChannel/YouTubeChannel";

export const YOUTUBECHANNEL_TITLE_FIELD = "name";

export const YouTubeChannelTitle = (record: TYouTubeChannel): string => {
  return record.name?.toString() || String(record.id);
};
